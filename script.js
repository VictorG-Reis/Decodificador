// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



// Requisitos:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.


// A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
// O resultado deve ser exibido na tela.
// Extras:
// - Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.



let textInput;


function getText() {
  let textInput = document.getElementById('textInput').value
  //poderia usar um regex ou switch case mas quero deixar o mais simples possivel, feio? talvez. mas simples
  let newText = '';
    for (let i = 0; i < textInput.length; i++) {
      if(textInput[i] === 'a') {
      newText +=  'ai'
  
    } else if(textInput[i] == 'e') {
      newText +='enter'

    } else if(textInput[i] == 'i') {
      newText += 'imes'
      
    } else if(textInput[i] == 'o') {
      newText += 'ober'

    } else if(textInput[i] == 'u') {
      newText +='ufat'
    }
    else {
      newText += textInput[i]
    }
  }
  console.log(newText)
}

let buttonAction = document.getElementById('CriptografarBnt')
buttonAction.addEventListener('click', getText)
console.log(textInput)

