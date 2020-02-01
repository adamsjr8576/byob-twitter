const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Australian Twitter Users';

app.use(express.json());

app.get('/api/v1/users/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const user = await database('users').where('id', id).select();
    if (user.length) {
      userData = user[0];
      response.status(200).json(userData);
    } else {
      response.status(404).json({
        error: `Could not locate a user with the ID of ${id}`
      });
    }
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/login/:username', async (request, response) => {
  try {
    const username = request.params.username;
    const user = await database('users').where('user_screen_name', username).select();
    if (user.length) {
      userId = {
        id: user[0].id
      }
      response.status(200).json(userId);
    } else {
      response.status(404).json({
        error: `Login username: ${username} invalid. Please enter a valid username or create an account.`
      });
    }
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/users/:id/posts', async (request, response) => {
  try {
    const id = request.params.id;
    const user = await database('users').where('id', id).select();
    if(!user.length) {
      return response.status(404).json({ error: `Unable to find a user with the id of ${id}` })
    }
    const userPosts = await database('posts').where('user_id', id).select();
    if (userPosts.length) {
      response.status(200).json(userPosts);
    } else {
      response.status(404).json({
        error: `User ${user[0].user_screen_name} has not made any posts.`
      });
    }
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/posts/:date', async (request, response) => {
  try {
    const date = request.params.date;
    const posts = await database('posts').where('post_created_at', date).select();
    if (posts.length) {
      response.status(200).json(posts)
    } else {
      response.status(404).json({
        error: `No posts where found for the date of ${date}`
      });
    }
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/users', async (request, response) => {
  const user = request.body;

  for (let requiredParameter of ['user_name', 'user_screen_name', 'user_description', 'user_location']) {
    if (!user[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { user_name: <String>, user_screen_name: <String>, user_description: <String>, user_location: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  try {
    const id = await database('users').insert(user, 'id');
    response.status(201).json({ id })
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/users/:id/posts', async (request, response) => {
  let post = request.body;
  for (let requiredParameter of ['retweet_count', 'favorite_count', 'full_text', 'user_id']) {
    if (!post[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { retweet_count: <Integer>, favorite_count: <Integer>, full_text: <String>, user_id: <Integer> }. You're missing a "${requiredParameter}" property.` });
    }
  }
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  post = {
    "post_created_at": today,
    ...post
  }

  try {
    let id = await database('posts').insert(post, 'post_id');
    id = id[0];
    response.status(201).json({ id })
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.delete('/api/v1/users/:id/posts/:postid', async (request, response) => {
  const postId = request.params.postid;
  try {
    const user = await database('posts').where('post_id', postId).delete();
    const message = user? 'successful delete' : `post with id of ${postID} could not be found`;
    response.status(201).json(user);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
