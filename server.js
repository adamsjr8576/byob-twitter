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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
