const express = require('express'); //requiring express which is a framework for node.js that provides features such as HTTP utility methods and middleware
const app = express(); //using express to create an instance of our app so that we have
//access to app and all of it's methods such as use, get, set - that make it easier to create our endpoints

const environment = process.env.NODE_ENV || 'development'; //this is telling our server which environment to use, which have been set in out knexfile.js
//if it is running on heroku then it automatically detects that via process.env.NODE_ENV and uses the production environment otherwise it uses development
const configuration = require('./knexfile')[environment]; //this gets the database configuration from our knexfile.js so that our app can connect to it.
const database = require('knex')(configuration); //this creates an instance of our database using knex giving us access to the database and making it possible to edit it connects app to database

app.set('port', process.env.PORT || 3000); //sets our server to a port and if it is not hosted somewhere like heroku then it defaults to localhost:3000 - this is the point where I server/database can be accessed from
app.locals.title = 'Australian Twitter Users'; //This just creates a title for app on the local side - it is not necessary to have

app.use(express.json()); //provides our app with support for  parsing JSON - parses request body to json by default

app.get('/api/v1/users/:id', async (request, response) => { //app.get generates a GET endpoint with a specified url that becomes the point for the GET request to be accessed -
  //it takes in a request and response - the request contains things such as that request body and params on the url - the response is what will be returned for the request
  //it is async because accessing the database is asynchronous - This GET endpoint is used to retrieve a specific user by their id
  try {
    const id = request.params.id; //this gets the id from the :id param on the url needed to access the user via id form the database
    const user = await database('users').where('id', id).select(); //this accesses the users database and queries it to find the item where its id property matches the id contained in the params
    // this returns the object of whatever is found in an array or returns an empty array if nothing is found
    if (user.length) { //checking to see if anything was found with the provided id
      userData = user[0]; //if something was found pull the object out of the array
      response.status(200).json(userData); //send a response back with a status code of 200 - successful - and send them the found user object
    } else {
      response.status(404).json({ //if no users were found then send a response back with a status code of 404 - Not Found - along with an object containing an error message that is relevant to the search
        error: `Could not locate a user with the ID of ${id}`
      });
    }
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.get('/api/v1/login/:username', async (request, response) => { //this GET endpoint is meant to serve as a login functionality - the query searches for user via their
  //username - it has a param of :username that is used to locate a user
  try {
    const username = request.params.username; //gets the username that is submitted via the param in the url
    const user = await database('users').where('user_screen_name', username).select(); //queries the database to find the user whose user_screen_name property matches the username provided.
    //this returns an array that is either empty if the query was not able to locate or anything or contains the user object that matches
    if (user.length) { //checks to see if the query was succesful in finding a user based on username provided or not
      userId = { //if successful then take the user and create an object containing just their id
        id: user[0].id
      }
      response.status(200).json(userId); //if a user is found then send a response with a status of 200 along with a json object containing just that users id - once logged in another request
      //can take place to get that users information as well as their posts using their id
    } else {
      response.status(404).json({ //if it is not succesfull in finding a user then send a response with a status of 404 and an error object containing a relevant error message that could be used as the error handling for the login form
        error: `Login username: ${username} invalid. Please enter a valid username or create an account.`
      });
    }
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.get('/api/v1/users/:id/posts', async (request, response) => { //this GET endpoint will query the database posts to get a specific users post objects it will return them in an array and hadle error messaging
  try {
    const id = request.params.id; //this will get the users id from the params in the url
    const user = await database('users').where('id', id).select(); //query the database users to search for users with the id provided in params - it will either return an empty array or an array with the user object
    if(!user.length) { //this serves as error handling for the id entered in the params - if the id does not match an existing user then it will enter this if block
      return response.status(404).json({ error: `Unable to find a user with the id of ${id}` }) //if the id does not match any users then it will send a response 404 and a relevant error message - it also returns so that it bumps out
      // and does not proceed to query posts to try and find posts for a user that does not exist
    }
    const userPosts = await database('posts').where('user_id', id).select(); //if we know the id provided correlates to a user then we query the posts databse to find all the posts that have a user_id that matches the id provided
    //this return an array of post objects that correlate to the user or returns an empty array if that user has no posts
    if (userPosts.length) { //checks to see if the user has any posts
      response.status(200).json(userPosts); //if the user does have posts made then send a response with code 200 and an array containing the post object(s)
    } else {
      response.status(404).json({ //if there are no posts, but we know the user exists then send a response with code 404 saying that this user has no posts made
        error: `User ${user[0].user_screen_name} has not made any posts.`
      });
    }
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.get('/api/v1/posts/:date', async (request, response) => { //This GET endpoint will query the posts database to find any posts whose post_created_at property matches the date param passed in the url
  try {
    const date = request.params.date; //get the date from the date param in the url
    const posts = await database('posts').where('post_created_at', date).select(); //query the posts database to retrieve any posts whose post_created_at property matches the date param passed in the url
    // will return and set to posts an array that will either be empty or contain posts that match via the requirements
    if (posts.length) { //check to see if any posts where recieved
      response.status(200).json(posts) //if there where posts successfully received by the query then a response with a code of 200 and containing an array of post objects will be sent back.
    } else {
      response.status(404).json({ //if there are no posts found for the specified date then send a response with a code of 404 and an error object containing a relevant message
        error: `No posts where found for the date of ${date}`
      });
    }
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.post('/api/v1/users', async (request, response) => { //app.post generates a POST endpoint with a specific url - this POST will query the users database and insert a new user object if all requirements are met
  const user = request.body; //this gets the body from the request and assigns it to the user variable

  for (let requiredParameter of ['user_name', 'user_screen_name', 'user_description', 'user_location']) { //this for loop iterates over the requiredParameters listed in the array and for each requiredParameter
    //it checks to see that it is a property on the user object that was submitted via the request body.
    if (!user[requiredParameter]) { //if the requiredParameter does not exist on the user object then do something
      return response //if the requiredParameter conditions are not met then send a response
        .status(422) //with a status code of 422 Unprocessable entity
        .send({ error: `Expected format: { user_name: <String>, user_screen_name: <String>, user_description: <String>, user_location: <String> }. You're missing a "${requiredParameter}" property.` }); //it will send an error object containing a
        //relevant error message to tell the user what went wrong
    }
  }

  try {
    const id = await database('users').insert(user, 'id'); //if the user is in the correct format then query the posts database and insert the user object into the database and give it a unique id
    //this will return the unique id for that user
    response.status(201).json({ id }) //send a response of 201 Created with an object containing the created users unique id in an array;
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.post('/api/v1/users/:id/posts', async (request, response) => { //generates a POST endpoint with a specific url and is meant for a specific user to be able to create a post by querying the posts database and inserting a new post if all requirements are met
  let post = request.body; // assigns the body that is sent via the POST request from request.body to post - this should be the post objecy containing all the required information
  for (let requiredParameter of ['retweet_count', 'favorite_count', 'full_text', 'user_id']) { //this for loop iterates over the requiredParameters listed in the array and for each requiredParameter
    //it checks to see that it is a property on the post object that was submitted via the request body.
    if (!post[requiredParameter]) { //if any of the requiredParameters do not exist on the post object then go into if block
      return response // if requiredParameters are not met then return (so that it bumps out of the POST once done) a response
        .status(422) //with a code of 422 Unprocessable entity
        .send({ error: `Expected format: { retweet_count: <Integer>, favorite_count: <Integer>, full_text: <String>, user_id: <Integer> }. You're missing a "${requiredParameter}" property.` }); //it will send an error object containing a
        //relevant error message to tell the user what went wrong and the required parameters needed and what is missing
    }
  }
  var today = new Date(); //create a today instance of Date that generates info for today's date
  var dd = String(today.getDate()).padStart(2, '0'); //makes sure that if the day is a single digit that it will then be preceeded with a 0
  var mm = String(today.getMonth() + 1).padStart(2, '0'); ////makes sure that if the month is a single digit that it will then be preceeded with a 0 and makes the month count start on 1 instead of 0
  var yyyy = today.getFullYear(); //will get the current year
  today = yyyy + '-' + mm + '-' + dd; //formats the date to match the format in the database
  post = { //creates a new object with the property of post_created_at containing the date created along with the post object from the request
    "post_created_at": today, //adds new key/value pair containing the post_created_at
    ...post //uses the spread operator to put the post object into the new one
  }

  try {
    let id = await database('posts').insert(post, 'post_id'); //queries the database posts and inserts the post object while also assigning it a unique post_id
    //this returns an array with a unique id for that post generated and assigns it to the id
    id = id[0]; //reassigns id to the id without the array
    response.status(201).json({ id }) //sends a response with a status of 201 and an id object containing the posts specific id
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.delete('/api/v1/users/:id/posts/:postid', async (request, response) => { //generates a DELETE endpoint with a specific url to access it that contains to params, the user id and the post id, to delete a specific post
  const postId = request.params.postid; //assigns the postid from the url params to a postId variable
  try {
    const post = await database('posts').where('post_id', postId).select(); //queries the database posts and searched the post_id properties for one that matches the id provided in the params
    //returns an array that is either empty if none where found or a post object
    if (!post.length){ //if no post was found then do this stuff
      return response.status(404).json({ //return a response to end the functionality - and send a response with a status of 404 along with an error object containing a message saying a post with that id could not be found
      error: `Could not locate a post with the ID of ${postId}`
      });
    }
    const postDelete = await database('posts').where('post_id', postId).delete(); //if a post has been verified to exist then query the posts database and find the post where the post_id property matched the id provided via the params
    //once located then delete that post object and remove it from the database
    response.status(204).json(postDelete); //send a response with a status of 204 Successful No content - and do not send any content back with it
  } catch(error) { //if the query to the database was unsuccessful from the database side then it throws an error and pops into the catch
    response.status(500).json({ error }); //if there is a server error then it will send a response status of 500 along with an object containing the error message
  }
});

app.listen(app.get('port'), () => { //this was used before deploying to heroku and is still used if the app is run locally - this listens to the port listed above
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`); //and console logs this message to show that the server is up and running
});
