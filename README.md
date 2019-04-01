# rest-api

ROUTE | HTTP | Header(s) | Body | Description |
------|------|-----------|------|------------|
`/api/users`| `GET` | none | none | Get all the users (Admin only)|
`/api/users/:id`|`GET`| none | none | Get a single user (Admin and Authenticated user) |
`/api/users`|`POST`| none | `username: String` (Required), `password: String`(Required), `role: String`(Required)| Create a user |
`/api/users/:id`|`DELETE`| none | none [| Delete a single user |  
`/api/users`|`PUT`| none | `username: String` (Required), `password: String`(Required), `role: String`(Required)| Update a user with new info|
`/api/signup`|`POST`| none | `username: String`(Required), `password: String`(Required) | Sign up with new user info | 
`/api/signin`|`POST`| none | `username: String`(Required), `password: String`(Required) | Sign in and get an access token based on credentials|  

Heroku :
https://strawberry-shortcake-61857.herokuapp.com/