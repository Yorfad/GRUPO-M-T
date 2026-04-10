export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '').replace(/[^+\d]/g, '')
}

export function buildWhatsAppUrl(phone: string, message = ''): string {
  const clean = formatPhone(phone)
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${clean}?text=${encoded}`
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}
