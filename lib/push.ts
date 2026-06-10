import webpush from "web-push";
import { supabaseAdmin } from "./supabase";

webpush.setVapidDetails(
  "mailto:contact@taxispm.fr",
  "BNhN-0-XNO3NNeVMnBtWUofYSvWbpErTQd_su-VUBQVFhrReYU8_Sp2slEty0Zq4rg0DqKaj9PeRL1siPz70cnY",
  "-AHR3-6XTV47MOTSC3mYyCiL3vPGiU41vow_qY6kC3o"
);

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
}

export async function saveSubscription(sub: PushSubscriptionJSON) {
  const keys = sub.keys as { p256dh: string; auth: string } | undefined;
  if (!sub.endpoint || !keys?.p256dh || !keys?.auth) throw new Error("Subscription invalide");

  await supabaseAdmin.from("push_subscriptions").upsert(
    { endpoint: sub.endpoint, p256dh: keys.p256dh, auth: keys.auth },
    { onConflict: "endpoint" }
  );
}

export async function removeSubscription(endpoint: string) {
  await supabaseAdmin.from("push_subscriptions").delete().eq("endpoint", endpoint);
}

export async function sendPushToAll(payload: PushPayload) {
  const { data: subs } = await supabaseAdmin.from("push_subscriptions").select("*");
  if (!subs?.length) return;

  const dead: string[] = [];

  await Promise.allSettled(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          JSON.stringify(payload)
        );
      } catch (err: unknown) {
        const status = (err as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) dead.push(sub.endpoint);
      }
    })
  );

  if (dead.length) {
    await supabaseAdmin.from("push_subscriptions").delete().in("endpoint", dead);
  }
}
