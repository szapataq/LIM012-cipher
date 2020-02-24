const cipher = {
  encode:(offset,string)=>{
    try {
      let mensaje=string.toUpperCase();
      let clave = parseInt(offset);
      let salida = "";
      let letras_Ascii;

      for(let i = 0; i < mensaje.length ; i++){
        let mensajeToAscii = mensaje[ i ].charCodeAt();
        if(mensajeToAscii === 32){
          salida=salida+String.fromCharCode( mensajeToAscii );
        }else{
          letras_Ascii = (mensajeToAscii - 65 + clave ) % 26 + 65;//formula sugerida a travez de codigo ASCII
          salida = salida+ String.fromCharCode( letras_Ascii );
        }
      }
      return salida;

    } catch (error) {
      throw error;
    }
    
  },
  /*encode: (offset, string) => {
    let clave=parseInt(offset);
    let cifrado = "";
    for (let i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        let numLetra = string.charCodeAt(i);
        if(numLetra>= 65 && numLetra<=90){
          cifrado += String.fromCharCode((numLetra-65+clave)%26+65);
        }
        if(numLetra >= 97 && numLetra <= 122){
          cifrado += String.fromCharCode((numLetra-97+clave)%26+97);
        }
        if(numLetra >= 48 && numLetra <= 57){
          cifrado += String.fromCharCode((numLetra-48+clave)%10+48);
        }
      }else{
        cifrado += " ";
      }
    }
    return cifrado;
  },*/

  decode:(offset,string)=>{
    let mensaje=string.toUpperCase();
    let clave = parseInt(offset);

    let salida = "";
    let letras_Ascii;
    for ( let i = 0; i < mensaje.length ; i++ ){
      let mensajeToAscii = mensaje[ i ].charCodeAt();
      if (mensajeToAscii === 32){
        salida=salida+String.fromCharCode(mensajeToAscii);
      }else{
        letras_Ascii = (mensajeToAscii + 65 - clave ) % 26 + 65;//formula sugerida a travez de codigo ASCII
        salida = salida+ String.fromCharCode( letras_Ascii );
      }
    }
    return salida;
  }
  /*decode: (offset, string) => {
    let clave=parseInt(offset)
    let desCifrado = "";
    for (var i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if(letra != " "){
        let numLetra = string.charCodeAt(i);
        if(numLetra>= 65 && numLetra<=90){
          //2*26 porque recorre el abecedario 2 veces para descifrar
          desCifrado += String.fromCharCode((numLetra-65-clave+10*26)%26+65);
        }
        if (numLetra >= 97 && numLetra <= 122){
          desCifrado += String.fromCharCode((numLetra-97-clave+10*26)%26+97);
        }
        if(numLetra >= 48 && numLetra <= 57){
          desCifrado += String.fromCharCode((numLetra-48-clave+5*10)%10+48);
        }
      }else{
          desCifrado += " ";
      }
    }
    return desCifrado;
  }*/
};

export default cipher;