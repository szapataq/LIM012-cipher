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
        letras_Ascii = (mensajeToAscii + 65 - clave ) % 26 + 65;
        salida = salida+ String.fromCharCode( letras_Ascii );
      }
    }
    return salida;
  }
  
};

export default cipher;