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
    return text.replace(/[\s\p{P}]/gu, "").length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },


  getAverageWordLength: (text) => {
    console.log(text);
    const words = text.match(/\S+/g) || [];
    const totalLength = words.reduce((total, word) => total + word.length, 0);
    return Number((totalLength / words.length).toFixed(2)) || 0;
    //to fixed va a redondear con dos cifras 
    //convertir el texto ne un arreglo, recorrer el arreglo con un for, guardar el largo de cada palabra en una suma y al final dividirla entre el num de palabras
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  },
  getNumberCount: (text) => {
    const nums = text.match(/\d+/g);
    return nums.length;
  },

  //expresion regex que excluya letras o incluya nums
  // si el valor ingresado es un numero retornalo
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.


  getNumberSum: (text) => {
    let nums = text.match(/\d+/g);
    return nums.reduce((acc, number) => acc + parseInt(number), 0);
  },


  // getWordCount: (text) => text.trim().split(" ").length funcion flecha mas corta, sin el return, solo cuando mi instruccion es pequeña 
  
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  



};



//si el valor ingresado es un numero, sumalos y retornalos 
//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.


export default analyzer;
