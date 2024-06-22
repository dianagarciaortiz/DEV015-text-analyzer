import analyzer from './analyzer.js';
console.log(analyzer)
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const textarea= document.querySelector("textarea"); // aqui estamos dando input al text area para que detecte que estan ingresando algo al textarea
textarea.addEventListener("input", function(){  //addeventlistener agrega el evento input e usa para crear controles interactivos para formularios basados en la web con el fin de recibir datos del usuario

    const characterCount = analyzer.getCharacterCount(textarea.value);   
console.log(characterCount);

    const palabras = document.querySelector('li[data-testid="word-count"]');
    const numeroCaracteres = document.querySelector('li[data-testid="character-count"]');
    const caracteresSinEspacios = document.querySelector('li[data-testid="character-no-spaces-count"]');
    const longitudMedia = document.querySelector('li[data-testid="word-length-average"]');
    const recuentoNumeros = document.querySelector('li[data-testid="number-count"]');
    const sumaNumeros= document.querySelector('li[data-testid="number-sum"]');
   

palabras.textContent = "Contador de palabras : " + analyzer.getWordCount(textarea.value)
numeroCaracteres.textContent = "Contador de caracteres : " + analyzer.getCharacterCount(textarea.value)
caracteresSinEspacios.textContent = "Contador de caracteres sin espacios : " + analyzer.getCharacterCountExcludingSpaces(textarea.value)
longitudMedia.textContent =  "Promedio de palabras : " + analyzer.getAverageWordLength(textarea.value)
recuentoNumeros.textContent = "Contador de numeros: " + analyzer.getNumberCount(textarea.value)
sumaNumeros.textContent = "Suma de numeros : " + analyzer.getNumberSum(textarea.value)
});




const resetbutton = document.getElementById("reset-button");
resetbutton.addEventListener("click", () => {
  textarea.value = '';
});