import { initialStoreSettings } from '../data/demoData';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

export function getWhatsAppLink(productName?: string, customMessage?: string): string {
  const number = initialStoreSettings.whatsappNumber;
  let text = customMessage;
  if (!text) {
    if (productName) {
      text = `Hello, I am interested in "${productName}". Please let me know about its availability, price and details.`;
    } else {
      text = `Hello Pranjul Fashion House! I would like to inquire about your fashion collection in Chaubepur.`;
    }
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getCallLink(): string {
  return `tel:${initialStoreSettings.phone.replace(/\s+/g, '')}`;
}
