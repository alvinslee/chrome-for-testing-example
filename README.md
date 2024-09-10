This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is meant to demonstrate end-to-end testing for a simple React application, specifically when using the [Chrome for Testing Buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-chrome-for-testing) alongside Heroku CI.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode at port `8080`.  Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

### `npm test`

Runs end-to-end tests in `src/tests/puppeteer.test.js`, using Jest.

### `npm run test:ci`

Uses `start-server-and-test` package to start up React application at port `8080`, then run tests.

## `app.json` for Heroku CI configuration

This manifest file specifies the buildpacks needed for running in Heroku CI, along with the command(s) to execute when Heroku initiates a test run.
