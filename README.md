# Examenopdracht Front-end Web Development / Web Services

> Schrap hierboven wat niet past

- Student: Gilles Van Cleemput
- Studentennummer: 182542gv
- E-mailadres: gilles.vancleemput@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

## Opstarten

First, install the dependencies using yarn install.

To start the React app, create a .env file in the root of this folder with the following content

REACT_APP_AUTH0_DOMAIN= your own AUTH0 credentials
REACT_APP_AUTH0_CLIENT_ID= your own AUTH0 credentials
REACT_APP_AUTH0_API_AUDIENCE= your own AUTH0 credentials
REACT_APP_BASEURL = base url of your SinSin API

Then run yarn start.

## Testen

First, install the dependencies using yarn install.
Then run the command 'yarn run cypress open' in the integrated therminal of the project
As a result Cypress will start up.
Shose for the opion E2E Testing and choose a browser that is intalled on your machine.
Finally The tests will run in the choosen browser window.
