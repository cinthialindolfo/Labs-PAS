import React, { useState } from 'react';
import './styles.css';

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function shiftChar(char, shift) {
  const index = alphabet.indexOf(char);
  if (index === -1) {
    return char;
  }
  return alphabet[(index + shift + alphabet.length) % alphabet.length];
}

function criptografar(text, key) {
  const shiftedText = text.split('').map(char => shiftChar(char, key)).join('');
  return shiftedText.split('').reverse().join('');
}

function descriptografar(text, key) {
  const reversedText = text.split('').reverse().join('');
  return reversedText.split('').map(char => shiftChar(char, -key)).join('');
}

function App() {
  const [key, setKey] = useState(-6);
  const [originalMessage, setOriginalMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptionInput, setDecryptionInput] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleEncrypt = () => {
    setEncryptedMessage(criptografar(originalMessage, key));
  };

  const handleDecrypt = () => {
    setDecryptedMessage(descriptografar(decryptionInput, key));
  };

  return (
    <div className="container">
      <h1>CriptoMágica</h1>
      
      <input 
        type="text" 
        placeholder="Digite a mensagem para criptografar" 
        value={originalMessage}
        onChange={e => setOriginalMessage(e.target.value)}
      />
      <button onClick={handleEncrypt}>Criptografar</button>
      <input 
        type="text" 
        placeholder="Mensagem Criptografada" 
        value={encryptedMessage}
        readOnly
      />
      
      <input 
        type="text" 
        placeholder="Digite a mensagem criptografada para descriptografar" 
        value={decryptionInput}
        onChange={e => setDecryptionInput(e.target.value)}
      />
      <button onClick={handleDecrypt}>Descriptografar</button>
      <input 
        type="text" 
        placeholder="Mensagem Descriptografada" 
        value={decryptedMessage}
        readOnly
      />
    </div>
  );
}

export default App;
