const express = require('express');
var cors = require('cors');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] = [] };
    console.log('posts');
    console.log(posts[id]);
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;

    const post = posts[postId];
    console.log('Before it crashes');
    console.log('data', data);
    console.log(posts);
    console.log(post);
    post.comments.push({ id, content });
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
