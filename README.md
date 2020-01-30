# Twitter users and posts around Australian election
  This database is a small subset of a database containing all Twitter users and their posts pertaining to an Australian election. This was created for a school project while at Turing School of Software Design & Development and contains all open endpoints that require no authentication.

  The server can be accessed via the root URL: 'http://localhost:3000'

## Open Endpoints

* User Login: GET '/api/v1/login/:username'
* [Get Specific User Data](#Get-User-Data): GET '/api/v1/users/:id'
* Get Specific User Posts: GET 'api/v1/users/:id/posts'
* Get Specific Post: GET 'api/v1/posts/:id'

### Get-User-data
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
  
