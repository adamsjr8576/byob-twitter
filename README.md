# Twitter users and posts around Australian election
  This database is a small subset of a database containing all Twitter users and their posts pertaining to an Australian election. This was created for a school project while at Turing School of Software Design & Development and contains all open endpoints that require no authentication.

  The server can be accessed via the root URL: 'https://byob-twitter.herokuapp.com'

## Open Endpoints

* [GET-User-id](#GET-User-id): GET '/api/v1/login/:username'
* [GET-Specific-User-Data](#GET-Specific-User-Data): GET '/api/v1/users/:id'
* [GET-Specific-User-Posts](#GET-Specific-User-Posts): GET 'api/v1/users/:id/posts'
* [GET-Post-By-Date](#GET-Post-By-Date): GET 'api/v1/posts/:id'
* [POST-user](#POST-User): POST 'api/v1/users'

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/:username` | GET | not needed | User id object: `{"id": 2420}` |
| `http://localhost:3001/api/v1/users/:id` | GET | not needed | User data object: `{"id": 2323, "user_id": 4, "user_name": "Nevada News", "user_screen_name": "Nevada", "user_description": "Latest news for Nevada.", "user_location": "Nevada, USA", "user_created_at": "2011-04-10 00:00:17", "created_at": "2020-01-30T05:51:48.248Z", "updated_at": "2020-01-30T05:51:48.248Z"}` |
| `api/v1/users/:id/posts` | GET | not needed | Array of user post objects: `[{"post_id": 1225,"post_created_at": "2019-05-19 07:49:34","id": 5,"retweet_count": 0,"favorite_count": 0,"full_text": "In Coal We Trust-Australia's Voters Back PM Morrison's Faith in Fossil Fuel\" by Reuters via NYT https://t.co/M8lun6WJtv","user_id": 2419,"created_at": "2020-01-30T05:51:48.499Z","updated_at": "2020-01-30T05:51:48.499Z"},...]` |
| `api/v1/posts/:date` | GET | not needed | Array of post objects by date: `[{"post_id": 1687,"post_created_at": "2019-05-18","id": 5,"retweet_count": 0,"favorite_count": 0,"full_text": "@EcoInternetDrGB I feel we have now lost all hope. I have lost all hope in the future of Australia. Apologies to the World for this election","user_id": 2473,"created_at": "2020-01-30T21:53:23.221Z","updated_at": "2020-01-30T21:53:23.221Z"},...]` |
| `api/v1/users` | POST | body: `{'user_name': [string], 'user_screen_name': [string], 'user_description': [string], 'user_location'}: [string]`| User's ID: `{ "id": [integer]}` |


## GET-User-id
---
  This GET request will fetch a specific user's ID resulting in a response containing an object with that specific ID.

**URL:** `/api/v1/login/:username`

**METHOD:** `GET`

**URL PARAMS:**
* **Required:** `username=[string]`

### Successful Response:
**Code:** `200 OK`

**Example Response:**
    For a user with a username of 'afahour'
    
    json
    {
      "id": 2420
    }
    
### Unsuccessful Response:
**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "Login username: [username] invalid. Please enter a valid username or create an account."
    }
    
    
##### OR

**Code:** `500 Internal Server Error`

**Content:**

  json
  {
    "error": "500 Internal Server Error"
  }

## GET-User-data
---
  This GET request will fetch a specific users Data resulting in a response containing an object.

**URL:** `/api/v1/users/:id`

**METHOD:** `GET`

**URL PARAMS:**
* **Required:** `id=[integer]`

### Successful Response:
**Code:** `200 OK`

**Example Response:**
    For a user with an id of 2323
    
    json
    {
    
      "id": 2323,
      "user_id": 4,
      "user_name": "Nevada News",
      "user_screen_name": "Nevada",
      "user_description": "Latest news for Nevada.",
      "user_location": "Nevada, USA",
      "user_created_at": "2011-04-10 00:00:17",
      "created_at": "2020-01-30T05:51:48.248Z",
      "updated_at": "2020-01-30T05:51:48.248Z"
    }
    
### Unsuccessful Response:
**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "Could not locate a user with the ID of [id]"
    }
    
    
##### OR

**Code:** `500 Internal Server Error`

**Content:**

  json
  {
    "error": "500 Internal Server Error"
  }
  
  ## GET-Specific-User-Posts
---
  This GET request will fetch a specific user's posts resulting in a response containing an array of post objects that belong to that user.

**URL:** `/api/v1/user/:id/posts`

**METHOD:** `GET`

**URL PARAMS:**
* **Required:** `id=[integer]`

### Successful Response:
**Code:** `200 OK`

**Example Response:**
    For a user with an id of 2419
    
    json
    [{
        "post_id": 1225,
        "post_created_at": "2019-05-19 07:49:34",
        "id": 5,
        "retweet_count": 0,
        "favorite_count": 0,
        "full_text": "In Coal We Trust-Australia's Voters Back PM Morrison's Faith in Fossil Fuel\" by Reuters via NYT https://t.co/M8lun6WJtv",
        "user_id": 2419,
        "created_at": "2020-01-30T05:51:48.499Z",
        "updated_at": "2020-01-30T05:51:48.499Z"
    },
    {
        "post_id": 1223,
        "post_created_at": "2019-05-20 08:44:18",
        "id": 5,
        "retweet_count": 0,
        "favorite_count": 0,
        "full_text": "In Coal We Trust: Australian Voters Back PM Morrison's Faith in Fossil Fuel\" by Reuters via NYT https://t.co/Me1qkxzC3o",
        "user_id": 2419,
        "created_at": "2020-01-30T05:51:48.498Z",
        "updated_at": "2020-01-30T05:51:48.498Z"
    }]
    
### Unsuccessful Response:
**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "Unable to find a user with the id of 419"
    }
    
    
##### OR

**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "User [username] has not made any posts."
    }

**Code:** `500 Internal Server Error`

**Content:**

  json
  {
    "error": "500 Internal Server Error"
  }
  
  ## GET-Post-By-Date
---
  This GET request will fetch with a param of date and return a response containing an array of post objects that were made on that date

**URL:** `/api/v1/posts/:date`

**METHOD:** `GET`

**URL PARAMS:**
* **Required:** `date=[string]` example: `2019-05-18`

### Successful Response:
**Code:** `200 OK`

**Example Response:**
    For a date of 2019-05-18
    
    json
    [{
        "post_id": 1687,
        "post_created_at": "2019-05-18",
        "id": 5,
        "retweet_count": 0,
        "favorite_count": 0,
        "full_text": "@EcoInternetDrGB I feel we have now lost all hope. I have lost all hope in the future of Australia. Apologies to the World for this election",
        "user_id": 2473,
        "created_at": "2020-01-30T21:53:23.221Z",
        "updated_at": "2020-01-30T21:53:23.221Z"
    },
    {
        "post_id": 1928,
        "post_created_at": "2019-05-18",
        "id": 5,
        "retweet_count": 0,
        "favorite_count": 1,
        "full_text": "Australia's shock election results are drawing comparisons to Trump's 2016 win https://t.co/TBYSYKtClC #2020Elections #Elections #2019Elections #Politics",
        "user_id": 2560,
        "created_at": "2020-01-30T21:53:23.345Z",
        "updated_at": "2020-01-30T21:53:23.345Z"
    }]
    
### Unsuccessful Response:
**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "No posts where found for the date of 2019-5-18"
    }
    
    
##### OR

**Code:** `500 Internal Server Error`

**Content:**

  json
  {
    "error": "500 Internal Server Error"
  }
  
  
## POST-user
---
  This POST request will post a users information needed to create an account to the users database resulting in a response containing that users unique id.

**URL:** `/api/v1/users`

**METHOD:** `POST`

**URL PARAMS:**
* **Required:** NONE

### Successful Response:
**Code:** `200 OK`

**Example Response:**
    For a user with an id of '22'
    
    json
    {
      "id": 22
    }
    
### Unsuccessful Response:
**Code:** `404 Not Found`

**Content:**

    json
    {
      "error": "Login username: [username] invalid. Please enter a valid username or create an account."
    }
    
    
##### OR

**Code:** `500 Internal Server Error`

**Content:**

  json
  {
    "error": "500 Internal Server Error"
  }
  
