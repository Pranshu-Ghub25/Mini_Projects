import React, { useState } from 'react';
import axios from 'axios';
import './ShortenURL.css'
const ShortenURL = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedURL)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(error => {
        console.error('Error copying to clipboard:', error);
      });
    };
  const shortenURL = async () => {
    const encodedParams = new URLSearchParams();
    console.log(originalURL);
    encodedParams.set('url', originalURL);

    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
        
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setShortenedURL(response.data.result_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <>
  <div className="shorten-url-container">
      <h2>⚔️Slashify✂️</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter URL"
          value={originalURL}
          onChange={e => setOriginalURL(e.target.value)}
        />
        <button onClick={shortenURL}>Shorten</button>
      </div>
      {shortenedURL && (
        <div className="result-container">
          <p>Shortened URL:</p>
          <div className="shortened-link">
            <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
              {shortenedURL}
            </a>
            <button onClick={copyToClipboard}>Copy</button>
          </div>
        </div>
      )}
      <h6>Made with ❤️ by Pranshu</h6>
    </div>
  </>
  );
};

export default ShortenURL;
