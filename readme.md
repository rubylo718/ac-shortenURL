# Shorten URL

This a mastery assignment (指標作業) of AlphaCamp Term 2-3 (Back-end).


## Target

Overall abilities to build a Web App, including:

1. Use Git to manage the code. 

2. Be familiar with the Node.js execution environment and Express framework.

3. Use template engine (Handlebars) to build front-end pages with dynamic data.

4. Connect MongoDB database server with Express project to create a website with CRUD functions.

5. Publish the project to Heroku and connect with MongoDB cloud service.

## User Story

User can input an URL in the form, press the button, and get a shortened (sometimes not really short due to the domain name length) URL.

The format of the short URL is 5 digits of random alphanumeric characters.

When entering the same URL, User will get the same shortened URL.

User can link to the original site using the short URL while the server is running.

User can copy the shortened URL to clipboard by clicking a button.


## Getting Started

Run the App:

```
npm run start
```

Mongoose environment variable name: MONGODB_URI_shortURL

## Packages

express: 4.17.3

express-handlebars: 6.0.5

mongoose: 6.3.0

## Author

Ruby Lo

## Submitted Date

Apr. 23, 2022
