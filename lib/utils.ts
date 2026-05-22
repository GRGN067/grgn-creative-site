function normalizeWhatsAppPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("90")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `9${digits}`;
  }

  return `90${digits}`;
}

export function createWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizeWhatsAppPhone(phone)}?text=${encodeURIComponent(message)}`;
}
