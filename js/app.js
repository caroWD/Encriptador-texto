const textArea = document.querySelector('#userText');
const encryptedText = document.querySelector('#encryptedText');
const wellcomeBox = document.querySelector('.encrypted-text__wellcome').classList;
const encryptedBox = document.querySelector('.encrypted-text__encrypted').classList;

function encryptedBtn() {
  const encrypted = encryption(textArea.value);
  encryptedText.innerHTML = encrypted;
  textArea.value = '';
  wellcomeBox.add('inactive');
  encryptedBox.remove('inactive');
}

function decryptedBtn() {
  const decrypted = decryption(textArea.value);
  encryptedText.innerHTML = decrypted;
  textArea.value = '';
  wellcomeBox.add('inactive');
  encryptedBox.remove('inactive');
}

function encryption(encryptedString) {
  let codeArray = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  encryptedString = encryptedString.toLowerCase();
  for (let i = 0; i < codeArray.length; i++) {
    if (encryptedString.includes(codeArray[i][0])) {
      encryptedString = encryptedString.replaceAll(codeArray[i][0], codeArray[i][1]);
    }    
  }
  return encryptedString;
}

function decryption(decryptedString) {
  let codeArray = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  decryptedString = decryptedString.toLowerCase();
  for (let i = 0; i < codeArray.length; i++) {
    if (decryptedString.includes(codeArray[i][1])) {
      decryptedString = decryptedString.replaceAll(codeArray[i][1], codeArray[i][0]);
    }    
  }
  return decryptedString;
}