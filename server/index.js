import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import request from 'request';

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
})

app.get('#', (req, res) => {
    console.log('Pound hashtag works');
})

app.post('passphrase', (req, res) => {
    console.log('passphrase tag works');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
})

app.listen(port, (error) => {
    if(error){
        console.log('This is the express error: ', error);
    } else {
        console.log('Express is listening on port: ', port);
    }
})