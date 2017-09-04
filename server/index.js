import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');


const port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('images'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
});

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log('This is the express error: ', error);
  } else {
    console.log('Express is listening on port: ', port);
  }
});
