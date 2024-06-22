const analyzer = {  
  getWordCount: (text) => {
    // separar las palabras que hay en text con el espacio " " con metodo split 
    // saber el numero de palabras que hay por cada espacio y retornarlo

    return text.trim().split(" ").length; 
    // return text.length
    
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },


  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },


  getCharacterCountExcludingSpaces: (text) => { 
    return text.replace(/\s+/g, "").length;
     //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },


  getAverageWordLength: (text) => {  
    console.log(text);
    const words = text.match(/\S+/g) || [];
    const totalLength = words.reduce((total, word) => total + word.length, 0);
    return totalLength / words.length || 0;
    //convertir el texto ne un arreglo, recorrer el arreglo con un for, guardar el largo de cada palabra en una suma y al final dividirla entre el num de palabras
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  },
  getNumberCount: (text) => { 
    let countNumber = 0;
    for (let i = 0; i < (text.length); i++) {
      if (text[i] >= '0' && text[i] <= '9') {
        countNumber++;
      }
    }
    return countNumber;
    
    //expresion regex que excluya letras o incluya nums
    // si el valor ingresado es un numero retornalo
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },


  getNumberSum: (text) => {

    let sumNum = 0;
    
   // const numberSum = parseFloat(text);
  //console.log("Número:", numberSum);
  //return numberSum;
 },
    
    //si el valor ingresado es un numero, sumalos y retornalos 
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  }


export default analyzer;
