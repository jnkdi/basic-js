class VigenereCipheringMachine{
  encrypt(text, word){
      if (!(text && word)){
        throw new Error('Error');
      }
  }

  decrypt(text, word) {
      if (!(text && word)) {
          throw new Error('Error');
      }
  }
}

module.exports = VigenereCipheringMachine;
