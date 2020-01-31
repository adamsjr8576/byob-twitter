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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
