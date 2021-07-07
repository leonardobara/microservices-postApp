const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const axios = require('axios');
var cors = require('cors');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors());

const commentsByPostId = {};

app.post('/events', (req, res) => {
    console.log('ReqBody');
    console.log(req.body);
    const event = req.body;

    axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });

    res.send({ status: 'Ok' });
});


app.listen(4005, () => {
    console.log('Listening on 4005');
});
