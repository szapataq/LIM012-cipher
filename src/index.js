import cipher from './cipher.js';

/**variables para encriptar */
let message = document.getElementById('message');
let offset = document.getElementById('offset');
let btnEncode = document.getElementById('btn-encode');
let btnDecode = document.getElementById('btn-decode');
document.getElementById("first-section").style.display="block";
document.getElementById("second-section").style.display="none";
document.getElementById("footer").style.display="none";


let name = document.getElementById('name');

btnEncode.addEventListener("click", () => {
  if(message.value ==="" && message.value === ""){
    alert('completa los campos');
  }else{
    let output = document.getElementById('output');
    output.value = cipher.encode( offset.value , message.value );
  }
});
btnDecode.addEventListener("click", () => {
  if(message.value ==="" && message.value === ""){
    alert('completa los campos');
  }else{
  let output = document.getElementById('output');
  output.value = cipher.decode( offset.value , message.value );
  }
});
document.getElementById("btn-index").addEventListener("click",() => {
  let outputName = document.getElementById('output-name');
  outputName.innerHTML = "El diario de " + name.value;
  document.getElementById("first-section").style.display="none";
  document.getElementById("second-section").style.display="block";
  document.getElementById("footer").style.display="block";

});










