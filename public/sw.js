self.addEventListener("push", (event) => {
  if (!event.data) return;

  let data;
  try {
    data = event.data.json();
  } catch {
    data = { title: "Nouveau message", body: event.data.text() };
  }

  const title = data.title || "Nouveau message";
  const options = {
    body: data.body || "Un client vous a contacté.",
    icon: "/favicon-32.png",
    badge: "/favicon-32.png",
    tag: "nouveau-client",
    renotify: true,
    requireInteraction: true,
    data: { url: data.url || "/admin/messages" },
    actions: [
      { action: "open", title: "Voir le message" },
      { action: "dismiss", title: "Ignorer" },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "dismiss") return;

  const url = event.notification.data?.url || "/admin/messages";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if (client.url.includes("/admin") && "focus" in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
