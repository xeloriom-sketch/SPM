<?php
require_once __DIR__ . '/_helpers.php';
cors(['POST', 'OPTIONS']);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); echo json_encode(['error' => 'Méthode non autorisée']); exit;
}

$body = json_decode(file_get_contents('php://input'), true) ?? [];

$name    = trim($body['name'] ?? '');
$phone   = trim($body['phone'] ?? '');
$email   = trim($body['email'] ?? '');
$service = trim($body['service'] ?? '');
$date    = trim($body['date'] ?? '');
$message = trim($body['message'] ?? '');

if (!$name || !$phone || !$service) {
    http_response_code(400);
    echo json_encode(['error' => 'Champs obligatoires manquants']);
    exit;
}

// ── Save to messages.json ─────────────────────────────────────────────────────
$msg = [
    'id'         => uniqid('msg_', true),
    'name'       => $name,
    'phone'      => $phone,
    'email'      => $email ?: null,
    'service'    => $service,
    'date'       => $date ?: null,
    'message'    => $message ?: null,
    'read'       => false,
    'created_at' => date('c'),
];

$messages = readJson(DATA_DIR . 'messages.json');
array_unshift($messages, $msg);
writeJson(DATA_DIR . 'messages.json', $messages);

// ── Send email notification ───────────────────────────────────────────────────
$subject = "=?UTF-8?B?" . base64_encode("🚕 Nouveau client — $name ($service)") . "?=";
$dateStr  = $date ? date('d/m/Y', strtotime($date)) : 'Non précisée';
$htmlBody = "
<html><body style='font-family:Arial,sans-serif;background:#f8f9fa;padding:24px'>
<div style='max-width:520px;margin:0 auto;background:#fff;border-radius:12px;padding:28px;border:1px solid #e5e7eb'>
  <h2 style='color:#111;margin:0 0 20px'>🚕 Nouveau client — SPM Taxi</h2>
  <table style='width:100%;border-collapse:collapse'>
    <tr><td style='padding:6px 0;color:#888;font-size:13px;width:120px'>Nom</td><td style='padding:6px 0;font-size:13px;font-weight:bold'>$name</td></tr>
    <tr><td style='padding:6px 0;color:#888;font-size:13px'>Téléphone</td><td style='padding:6px 0;font-size:14px;font-weight:bold;color:#111'>" . htmlspecialchars($phone) . "</td></tr>
    <tr><td style='padding:6px 0;color:#888;font-size:13px'>Email</td><td style='padding:6px 0;font-size:13px'>" . ($email ? htmlspecialchars($email) : '—') . "</td></tr>
    <tr><td style='padding:6px 0;color:#888;font-size:13px'>Service</td><td style='padding:6px 0;font-size:13px'>" . htmlspecialchars($service) . "</td></tr>
    <tr><td style='padding:6px 0;color:#888;font-size:13px'>Date</td><td style='padding:6px 0;font-size:13px'>$dateStr</td></tr>
    " . ($message ? "<tr><td colspan='2' style='padding:12px 0'><div style='background:#f8f9fa;border-radius:8px;padding:12px;font-size:13px;color:#333'>" . nl2br(htmlspecialchars($message)) . "</div></td></tr>" : "") . "
  </table>
  <div style='margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center'>
    <a href='" . SITE_URL . "/admin/messages' style='background:#111;color:#fff;padding:10px 24px;border-radius:20px;text-decoration:none;font-size:13px'>Voir dans l'admin</a>
  </div>
  <p style='margin-top:20px;color:#aaa;font-size:11px;text-align:center'>SPM Taxi — Villebois (Ain 01) · taxispm.fr</p>
</div></body></html>";

$textBody = "Nouveau client — SPM Taxi\n\nNom: $name\nTéléphone: $phone\nEmail: " . ($email ?: '—') . "\nService: $service\nDate: $dateStr\n" . ($message ? "\nMessage:\n$message\n" : '') . "\nAdmin: " . SITE_URL . "/admin/messages";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: SPM Taxi <noreply@taxispm.fr>\r\n";
if ($email) $headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Cc: assiabillale@gmail.com\r\n";
$headers .= "X-Mailer: SPM-Taxi-PHP\r\n";

@mail(CONTACT_EMAIL, $subject, $htmlBody, $headers);

// ── Send push notifications with JSON payload ─────────────────────────────────
$pushPayload = json_encode([
    'title' => "🚕 Nouveau client — $name",
    'body'  => "$phone · $service" . ($date ? " · " . date('d/m/Y', strtotime($date)) : ''),
    'url'   => '/admin/messages?id=' . $msg['id'],
], JSON_UNESCAPED_UNICODE);
sendPushToAll($pushPayload);

echo json_encode(['success' => true, 'id' => $msg['id']]);
