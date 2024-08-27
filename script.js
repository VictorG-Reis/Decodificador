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



let buttonAction = document.getElementById('CriptografarBnt')
buttonAction.addEventListener('click', criptografarText)


let DescriptografarBnt = document.getElementById("DescriptografarBnt")
DescriptografarBnt.addEventListener('click', descriptografarText)


function criptografarText() {
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

  document.querySelector('.texto').innerHTML = newText

  document.querySelector('#img').style.display= 'none'
  document.querySelector('#subtitle').style.display= 'none'

  document.querySelector('.texto').style.whiteSpace = 'pre-wrap';
  
}


  function descriptografarText() {
  
  let textInput = document.getElementById('textInput').value

  let i = 0;
  let newText = '';
  while (i < textInput.length) {
    if (textInput.startsWith('ai', i)) {
      newText += 'a';
      i += 2; 
    } else if (textInput.startsWith('enter', i)) {
      newText += 'e';
      i += 5; 
    } else if (textInput.startsWith('imes', i)) {
      newText += 'i';
      i += 4; 
    } else if (textInput.startsWith('ober', i)) {
      newText += 'o';
      i += 4; 
    } else if (textInput.startsWith('ufat', i)) {
      newText += 'u';
      i += 4; 
    } else {
      newText += textInput[i];
      i++; 
    }
  }
  document.querySelector('.texto').innerHTML = newText
  document.querySelector('#img').style.display= 'none'
  document.querySelector('#subtitle').style.display= 'none'
  document.querySelector('.texto').style.whiteSpace = 'pre-wrap';
  
  

}


const bntCopy =document.getElementById('clipboard')
.addEventListener('click', execCopy)


  function execCopy() {
    var r = document.createRange();
    r.selectNode(document.getElementById('texto'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);

    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    } catch (err) {
    console.log('Não foi possível copiar!');
  }
}



