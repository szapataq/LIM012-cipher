import cipher from './cipher.js';

//**variables para encriptar */
let mensaje = document.getElementById('mensaje');
let clave = document.getElementById('clave');
let btn = document.getElementById('btn');
//**variables para desencriptar */
let mensajeEnc = document.getElementById('mensajeEnc');
let claveEnc = document.getElementById('claveEnc');
let btnEnc = document.getElementById('btnEnc');

btn.addEventListener("click", () => { 
  let encrip = document.getElementById('encriptado');
  encrip.value=cipher.encode(clave.value,mensaje.value);
});
btnEnc.addEventListener("click", () => {
  let desencrip = document.getElementById('desencriptado');
  desencrip.value=cipher.decode(claveEnc.value,mensajeEnc.value);
});




