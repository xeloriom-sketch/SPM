export async function markAsRead(_id: string) {
  throw new Error("Admin actions are disabled in static export mode.");
}

export async function deleteMessage(_id: string) {
  throw new Error("Admin actions are disabled in static export mode.");
}

export async function saveSetting(_key: string, _value: string) {
  throw new Error("Admin actions are disabled in static export mode.");
}
