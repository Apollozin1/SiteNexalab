function applyWhatsAppMask(input: HTMLInputElement) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length <= 2) {
    input.value = value.length ? `(${value}` : '';
  } else if (value.length <= 7) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  }
}

const whatsappInput = document.getElementById('whatsapp') as HTMLInputElement | null;
if (whatsappInput) {
  whatsappInput.addEventListener('input', () => applyWhatsAppMask(whatsappInput));
}
