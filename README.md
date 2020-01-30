# Twitter users and posts around Australian election
  This database is a small subset of a database containing all Twitter users and their posts pertaining to an Australian election. This was created for a school project while at Turing School of Software Design & Development and contains all open endpoints that require no authentication.

  The server can be accessed via the root URL: 'http://localhost:3000'

## Open Endpoints

* [User-Login](#User-Login): GET '/api/v1/login/:username'
* [Get-Specific-User-Data](#Get-User-Data): GET '/api/v1/users/:id'
* [Get-Specific-User-Posts](#Get-Specific-User-Posts): GET 'api/v1/users/:id/posts'
* Get Specific Post: GET 'api/v1/posts/:id'

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/:username` | GET | not needed | User id object: `{"id": 2420}` |
| `http://localhost:3001/api/v1/users/:id` | GET | not needed | User data object: `{"id": 2323, "user_id": 4, "user_name": "Nevada News", "user_screen_name": "Nevada", "user_description": "Latest news for Nevada.", "user_location": "Nevada, USA", "user_created_at": "2011-04-10 00:00:17", "created_at": "2020-01-30T05:51:48.248Z", "updated_at": "2020-01-30T05:51:48.248Z"}` |
| `api/v1/users/:id/posts` | GET | not needed | Array of user post objects: `[{"post_id": 1225,"post_created_at": "2019-05-19 07:49:34","id": 5,"retweet_count": 0,"favorite_count": 0,"full_text": "In Coal We Trust-Australia's Voters Back PM Morrison's Faith in Fossil Fuel\" by Reuters via NYT https://t.co/M8lun6WJtv","user_id": 2419,"created_at": "2020-01-30T05:51:48.499Z","updated_at": "2020-01-30T05:51:48.499Z"{"post_id": 1223,"post_created_at": "2019-05-20 08:44:18","id": 5,"retweet_count": 0,"favorite_count": 0,"full_text": "In Coal We Trust: Australian Voters Back PM Morrison's Faith in Fossil Fuel\" by Reuters via NYT https://t.co/Me1qkxzC3o","user_id": 2419,"created_at": "2020-01-30T05:51:48.498Z","updated_at": "2020-01-30T05:51:48.498Z"}]` |
| `api/v1/posts/:date` | GET | not needed | Array of post objects by date: `[{"post_id": 1687,"post_created_at": "2019-05-18","id": 5,"retweet_count": 0,"favorite_count": 0,"full_text": "@EcoInternetDrGB I feel we have now lost all hope. I have lost all hope in the future of Australia. Apologies to the World for this election","user_id": 2473,"created_at": "2020-01-30T21:53:23.221Z","updated_at": "2020-01-30T21:53:23.221Z"},{"post_id": 1928,"post_created_at": "2019-05-18","id": 5,"retweet_count": 0,"favorite_count": 1,"full_text": "Australia's shock election results are drawing comparisons to Trump's 2016 win https://t.co/TBYSYKtClC #2020Elections #Elections #2019Elections #Politics","user_id": 2560,"created_at": "2020-01-30T21:53:23.345Z","updated_at": "2020-01-30T21:53:23.345Z"}]` |

## User-Login
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

## Get-User-data
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
  
  ## Get-Specific-User-Posts
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
  
