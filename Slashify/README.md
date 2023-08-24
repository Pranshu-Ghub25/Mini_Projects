# Slashify - URL Shortener

Slashify is a simple web application that allows you to shorten long URLs into compact and shareable links. It utilizes the RapidAPI service to generate shortened URLs quickly and efficiently.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- - [Shorten URLs](#shorten-urls)
- - [Copy to Clipboard](#copy-to-clipboard)
- [Usage](#usage)
- [Installation](#installation)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Slashify is a user-friendly web application that aims to simplify the process of sharing long URLs. With a clean and intuitive interface, it enables users to input a URL and receive a shortened version that's perfect for sharing on social media, in emails, or through messaging apps.

This application is built using React and utilizes the RapidAPI service to interact with the URL shortening API.

## Features

### Shorten URLs

Easily convert long URLs into short and concise links with just a few clicks. The application utilizes the RapidAPI service to generate shortened URLs, making sharing links much more convenient.

### Copy to Clipboard

Once a URL is shortened, the application provides a "Copy" button next to the shortened link. Clicking this button copies the link to your clipboard, ready to be pasted anywhere you need it.

## Usage

1. Open the application in your web browser.
2. Enter the long URL you want to shorten in the input field.
3. Click the "Shorten" button to generate the shortened URL.
4. The shortened URL will be displayed below along with a "Copy" button.
5. Click the "Copy" button to copy the shortened URL to your clipboard.
6. Share the shortened URL wherever you like!

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   
       git clone https://github.com/your-username/slashify-url-shortener.git

2. Navigate to the project directory:

       cd slashify-url-shortener
3. Install the dependencies:

       npm install

4. Start the development server:

       npm start

5. Access the application in your web browser at http://localhost:3000.

#API Key
This application uses the RapidAPI service for URL shortening. You will need to obtain an API key from RapidAPI and set it in the code as the X-RapidAPI-Key header. Replace import.meta.env.VITE_REACT_APP_API_KEY with your actual API key.

#Contributing
Contributions are welcome! If you find any issues or want to enhance the application, feel free to open a pull request. Please make sure to follow the project's code of conduct.

#Acknowledgments
The application uses the RapidAPI service for URL shortening.

Made with ❤️ by  Pranshu

