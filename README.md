
<p align="center">
  <img width="200" src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" />
</p>

<!-- [![Build Status](https://travis-ci.org/andremartingo/node-rest-api-todo.svg?branch=master)](https://travis-ci.org/AFGM/node-rest-api-todo)
[![Coverage Status](https://coveralls.io/repos/github/AFGM/node-rest-api-todo/badge.svg?branch=master)](https://coveralls.io/github/AFGM/node-rest-api-todo?branch=master) -->

# Assignment - REST API

REST API complete with user accounts and authentication.
 Building a Booking store RESTful API app  using Node.js and Express.js implementing JWT (JSON Web Token)
authentication. The API should allow users to create, read, update, and delete tasks.

Demo : https://node-rest-api-todo.glitch.me

## Buzzwords

* Node.js
* Express
* MongoDB
* Mongoose
* REST API Design
* Clean Arquitecture
* Clean Code
* Version control with Git

## Installation

```bash
$ npm init
$ npm install
$ npm start

Setup your mongo URL
```

## HTTP Verbs

Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:

| HTTP METHOD    | POST            | GET                   | PUT         | DELETE      |
|----------------|-----------------|-----------------------|-------------|-------------|
| /api/items     | Create new item |                       | -           | -           |
| /api/items     | -               | List all items        | -           | -           |
| /api/items/:id | -               | Retrieve specific item| -           | -           |
| /api/items/:id | -               | -                     | Update Item | -           |
| /api/items/:id | -               | -                     | -           | Delete item |

## Error handling

Error handling acording with REST API [standards](http://www.restapitutorial.com/httpstatuscodes.html)

| Code  | Description                                                                                         |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `200` | The request has succeeded                                                                           |
| `400` | The request could not be understood by the server due to malformed syntax                           |
| `500` | Internal Server Error server error response code                                                    |
| `404` | The server has not found anything matching the Request-URI                                          |

## Request & Response Examples

### API Resources

* [POST /api/items](#post-items)
* [PUT /api/items/:id](#update-item)
* [GET /api/items](#get-itemsid)

### POST /items

Request body:

```json
{
  "name": "soup",
  "quantity": 5,
  "price" : 5,
  "images" : "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=600"
}
```

### PUT /api/items/:id

Request body:

```json
{
  "name": "Bath Tub"
}
```
form url-encoded

```url-encoded
|     Key     |      Value    |
|-------------|---------------|
|    name     |      shampoo  |
```

### GET /api/items

Response body:

```json
{
        "_id": "64912dded6f1de6a0e25e0b2",
        "name": "soap",
        "quantity": 5,
        "price": "5",
    },
    {
        "_id": "64912ea7666f61312b836042",
        "name": "soap",
        "quantity": 5,
        "price": "5",
    },
    {
        "_id": "64912ed4dc64c410ff36e58f",
        "name": "soap",
        "quantity": 5,
        "price": "5",
        "image": "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        "_id": "6491307f2b8c0ef892a02780",
        "name": "Bath Soup",
        "quantity": 5,
        "price": "5",
        "image": "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=600",
     }
```

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request
