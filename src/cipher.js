const cipher = {
  encode:(offset,string)=>{

    if(offset === "" || string ==="" || offset === 0 || string.length === 0 || offset ===null ||string === null){
      throw new TypeError();
    }

    let key = parseInt(offset);
    let asciiToString;
    let finalString= "";
    for(let i = 0; i<string.length;i++){
      
      let stringToAscii = string[i].charCodeAt();
  
      if(stringToAscii  >= 65 && stringToAscii  <= 90){
        asciiToString = String.fromCharCode((( stringToAscii  - 65 + key ) % 26 + 65));
        finalString += asciiToString;
  
      }else if(stringToAscii  >= 97 && stringToAscii  <= 122){
        asciiToString = String.fromCharCode((( stringToAscii  - 97 + key ) % 26 + 97));
        finalString += asciiToString;
  
      }else if(stringToAscii  >= 48 && stringToAscii  <= 57){
        asciiToString = String.fromCharCode((( stringToAscii  - 48 + key ) % 10 + 48));
        finalString += asciiToString;
      }else{
          finalString = finalString + string[i];
      }
    }
    return finalString;
  },
  
  decode:(offset,string)=>{

    let key = parseInt(offset);
    let asciiToString;
    let finalString= "";

    for(let i = 0; i<string.length;i++){

      let stringToAscii = string[i].charCodeAt();

      if(stringToAscii  >= 65 && stringToAscii  <= 90){
        asciiToString = String.fromCharCode((( stringToAscii  - 90 - key ) % 26 + 90));
        finalString += asciiToString;

      }else if(stringToAscii  >= 97 && stringToAscii  <= 122){
        asciiToString = String.fromCharCode((( stringToAscii  - 122 - key ) % 26 + 122));
        finalString += asciiToString;

      }else if(stringToAscii  >= 48 && stringToAscii  <= 57){
        asciiToString = String.fromCharCode((( stringToAscii  - 57 - (key) ) % 10 + 57));
        finalString += asciiToString;
      }else{
          finalString = finalString + string[i];
      }
    }
    return finalString;
  }
   
};

export default cipher;