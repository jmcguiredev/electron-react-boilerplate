# electron-react-boilerplate

## Experimental
This project was created to further my understanding of using Webpack, Babel, and React with Electron desktop apps.

## Build in Development Mode
``
npm run dev
``

## Build in Production Mode
``
npm run build
``

## Run Server

This command will create a build in production mode but only in memory, and then run a server on localhost:8080

``
npm run devserver
``

## Start Electron

This will start electron without building with Webpack and Babel.
``
npm run electron-start
``

## Build and Start Electron
This will run the devserver and the electron start scripts at the same time using [concurrently](https://www.npmjs.com/package/concurrently).

``
npm run dev-start
``
