import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Typed from "typed.js";
const VigenereCipherV3 = () => {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const copyToClipboard = () => {
    navigator.clipboard.writeText(decryptedText).then(() => {
      alert('Te copied to clipboard!');
    });
  }
  const encrypt = () => {
    const encryptedResult = encryptText(text, keyword);
    setDecryptedText(encryptedResult);
  };

  const decrypt = () => {
    const decryptedResult = decryptText(text, keyword);
    setDecryptedText(decryptedResult);
  };

  const encryptText = (plainText, keyword) => {
    let encryptedResult = '';
    const textLength = plainText.length;
    const keywordLength = keyword.length;

    for (let i = 0; i < textLength; i++) {
      const textChar = plainText[i];
      const keywordChar = keyword[i % keywordLength];
      
      if (!isAlphabetic(textChar)) {
        encryptedResult += textChar;
      } else {
        const encryptedCharCode = getEncryptedCharCode(textChar, keywordChar);
        encryptedResult += String.fromCharCode(encryptedCharCode);
      }
    }

    return encryptedResult;
  };

  const decryptText = (encryptedText, keyword) => {
    let decryptedResult = '';
    const textLength = encryptedText.length;
    const keywordLength = keyword.length;

    for (let i = 0; i < textLength; i++) {
      const textChar = encryptedText[i];
      const keywordChar = keyword[i % keywordLength];

      if (!isAlphabetic(textChar)) {
        decryptedResult += textChar;
      } else {
        const decryptedCharCode = getDecryptedCharCode(textChar, keywordChar);
        decryptedResult += String.fromCharCode(decryptedCharCode);
      }
    }

    return decryptedResult;
  };

  const isAlphabetic = (char) => {
    return /[A-Za-z]/.test(char);
  };

  const getEncryptedCharCode = (char, keywordChar) => {
    const baseCharCode = char.toUpperCase().charCodeAt(0);
    const keywordOffset = keywordChar.toUpperCase().charCodeAt(0) - 65;
    const encryptedCharCode = ((baseCharCode + keywordOffset) % 26) + 65;
    return char === char.toUpperCase() ? encryptedCharCode : encryptedCharCode + 32;
  };

  const getDecryptedCharCode = (char, keywordChar) => {
    const baseCharCode = char.toUpperCase().charCodeAt(0);
    const keywordOffset = keywordChar.toUpperCase().charCodeAt(0) - 65;
    const decryptedCharCode = ((baseCharCode - keywordOffset + 26) % 26) + 65;
    return char === char.toUpperCase() ? decryptedCharCode : decryptedCharCode + 32;
  };
const label="Enter to send a secret message"
               
  return (
  
    <Box
      sx={{
        bgcolor: '#212121',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
        <Typography variant="h4" minHeight={"50px"} className='role' component="h1" sx={{ color: 'lime' }}>
          Vigenère Cipher
        </Typography>
        <Typography variant="body1" component="div">
      <ul style={{ color: '#ffffff'}}>
        <span style={{ color: 'coolLime', marginBottom: '0.5rem' ,marginLeft: '0px'}}>
          Write Message 📝 ➡️
          {/* <span style={{ color: 'white' }}>refreshed</span> */}
        </span>
        <span style={{ color: 'coolLime', marginBottom: '0.5rem' ,marginLeft: '0px'}}>
        Choose Keyword 🔍 ➡️
          {/* <span style={{ color: 'white' }}>refreshed</span> */}
        </span>
        <span style={{ color: 'coolLime', marginBottom: '0.5rem' ,marginLeft: '0px'}}>
        Encrypt 🔐 ➡️
          {/* <span style={{ color: 'white' }}>refreshed</span> */}
        </span>
        <span style={{ color: 'coolLime', marginBottom: '0.5rem' ,marginLeft: '0px'}}>
        Share key and Decrypted text to unlock 🔓  
        </span>
      
        
      </ul>
    </Typography>
    <Box
          sx={{
            mt: 5,
            p: 3,
            width: { xs: '100%', sm: '80%', md: '60%' },
            mx: 'auto',
          }}
        >
          <TextField
          multiline 
            label={label}
            
            rows={4}
        fullWidth
          
        variant="filled"
            sx={{ background: 'lime',fontFamily:'sans-serif' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            label="Keyword"
            fullWidth
            variant="filled"
            sx={{ mt: 2, background: 'lime' }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              onClick={encrypt}
              sx={{ mr: 2, background: 'lime',color:'#212121' }}
            >
              Encrypt
            </Button>
            <Button
              variant="contained"
              onClick={decrypt}
              sx={{ background: 'lime',color:'#212121' }}
            >
              Decrypt
            </Button>
          </Box>
          {decryptedText && (
            <Typography variant="h6" component="h2" sx={{ color: 'lime', mt: 3 }}>
              Decrypted Text: {decryptedText}{' '}
              <Button variant="contained" onClick={copyToClipboard} sx={{ ml: 2, background: 'lime',color:'#212121' }}>
                Copy to Clipboard
              </Button>
            </Typography>
          )}
        </Box>
        <div style={{ maxWidth: '600px' }}>
          <Typography sx={{ color: '#ffffff', p: 2 }}>
            The Vigenère cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. In this cipher, each letter in the plaintext is shifted according to a keyword. The keyword determines the shift value for each letter, making the encryption more secure compared to simple substitution ciphers.
          </Typography>
          <Typography color={"#ffffff"}>Made with ❤️ by Lucifer Panda 🐼</Typography>
        </div>
      </Box>
  
  );
};

export default VigenereCipherV3;
