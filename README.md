# Project AIT BACKEND
<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"> <img src="https://img.shields.io/badge/Node JS-v14.18.0-brightgreen.svg">
<img src="https://img.shields.io/badge/Express -v4.17.1-brightgreen.svg"> <img src="https://img.shields.io/badge/Mongoose-v6.0.9-brightgreen.svg">

A college-oriented platform for students to bring all the clubs on a single application with the motive for students to collaborate and access all the information in one place. And this repo contains the backend of this poject.

---
## Requirements

For development, you will only need:

* [Node.js](https://nodejs.org/en/) 
* [Express](https://expressjs.com/) 
* [MongoDB](https://www.mongodb.com/) 
* [Postman](https://www.postman.com/) 
* [MongoDB Compass](https://www.mongodb.com/products/compass)

---

## Getting started
- Fork and then clone this repository
```bash
 git clone https://github.com/username/Project-AIT-Backend.git 
```
- Install dependencies
```bash
 cd Project-AIT-Backend
 npm install 
```
- Create a .env inside ```/config/config.env```
```bash
PORT=5000
MONGO_URI=Mongo_Connection_URL
JWT_SECRET=secret_key
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRE=7d
```
Replace these values with your credentials for your project.
- Running the project
```bash
 npm start 
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

## License
[MIT](https://choosealicense.com/licenses/mit/)
