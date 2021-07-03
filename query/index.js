const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors());

let posts = [];

app.get('/posts', (req, res) => {
    console.log(req.body);
    
    res.send(posts);
});

app.post('/events', (req, res) => {
    console.log(req.body);
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
        console.log('Im here', posts);
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        
        console.log(posts);
        const post = posts[postId];
        console.log(post);
        post.comments.push({id, content});
    }
    console.log(posts);
    res.send({ status: 'Ok' });
});


app.listen(4002, () => {
    console.log('Listening on 4002');
});
