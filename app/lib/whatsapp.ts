/**
 * IDWEAR — WhatsApp Ordering Utility
 * ─────────────────────────────────────────────
 * Change WHATSAPP_NUMBER to your real WhatsApp business number (international
 * format, no + or spaces). Example: '212612345678' for Morocco, '447700900000' for UK.
 */
export const WHATSAPP_NUMBER = '212622066371'

/**
 * Opens WhatsApp with a pre-filled order message.
 */
export function openWhatsAppOrder({
  productName,
  price,
  size = '',
  color = '',
  qty = 1,
}: {
  productName: string
  price: number
  size?: string
  color?: string
  qty?: number
}) {
  const lines: string[] = [
    `👋 Hello LGHELYA! I'd like to order:`,
    ``,
    `🛍️ *${productName}*`,
    `💰 Price: $${price}.00 each`,
    ...(color ? [`🎨 Color: ${color}`] : []),
    ...(size ? [`📏 Size: ${size}`] : []),
    `🔢 Quantity: ${qty}`,
    `💵 Total: $${(price * qty).toFixed(2)}`,
    ``,
    `Please confirm availability and payment details. Thank you!`,
  ]
  const text = encodeURIComponent(lines.join('\n'))
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Opens WhatsApp with a simple inquiry message for a product.
 */
export function openWhatsAppQuickOrder(productName: string, price: number) {
  openWhatsAppOrder({ productName, price })
}

/** Plain WhatsApp chat link (no pre-filled text) */
export const whatsappChatUrl = `https://wa.me/${WHATSAPP_NUMBER}`
