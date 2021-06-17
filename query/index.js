const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts', (req, res) => {
    console.log(req.body);
    const event = req.body;

    res.send({ status: 'Ok' });
});


app.listen(4002, () => {
    console.log('Listening on 4002');
});
