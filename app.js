import express, { request, response } from 'express';

const app = express();    // Express framework called...

app.get('/', (request, response) => {
      response.status(200).send("Home Page !!");     // Sending output to the app...
      console.log("user hit the resourece");
});

app.get('/about', (request, response) => {
      response.status(200).send("About page...");
});

app.all('*', (request, response) => {
      response.status(404).send("<h1>Resource not found !!</h1>");
});

app.listen(5000, () => {
      console.log("The App is currently running!!");
});