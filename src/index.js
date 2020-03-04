import cipher from './cipher.js';

/**variables para encriptar */
const message = document.getElementById('message');
const offset = document.getElementById('offset');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
document.getElementById("first-section").style.display="block";
document.getElementById("second-section").style.display="none";
document.body.childNodes[1].style.display="none";
document.body.childNodes[5].style.display="none";
const name = document.getElementById('name');


btnEncode.addEventListener("click", () => {
  if(message.value ==="" || message.value === ""){
    alert('completa los campos');
  }else{
    let output = document.getElementById('output');
    output.value = cipher.encode( offset.value , message.value );
  }
});

btnDecode.addEventListener("click", () => {
  if(message.value ==="" || message.value === ""){
    alert('completa los campos');
  }else{
  let output = document.getElementById('output');
  output.value = cipher.decode( offset.value , message.value );
  }
});

document.getElementById("btn-index").addEventListener("click",() => {
  if (name.value === ""){
    alert("Llena este campo");
  }else{
  let outputName = document.getElementById('output-name');
  outputName.innerHTML = "El diario de " + name.value;
  document.getElementById("first-section").style.display="none";
  document.getElementById("second-section").style.display="block";
  document.body.childNodes[1].style.display="block";
  document.body.childNodes[5].style.display="block";
  }
});










