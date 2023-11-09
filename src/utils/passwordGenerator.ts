export function generatePassword(length: number): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let cadenaGenerada = '';

  for (let i = 0; i < length; i++) {
    const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    cadenaGenerada += caracterAleatorio;
  }

  return cadenaGenerada;
}