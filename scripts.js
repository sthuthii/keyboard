

  function appendToInput(char) {
    document.getElementById('textInput').value += char;
  }
function erase(){
  var inputField =document.getElementById('textInput');
  var newField = inputField.value;
  inputField.value = newField.slice(0,-1);
  
}
function capsLock(){
  var inputsField = document.getElementById('textInput');
  var newsField = inputsField.value;
  inputsField.value = newsField.slice() + newsField.slice(-1).toUpperCase();
}

function deleteElement(element) {
  element.parentNode.removeChild(element);
}