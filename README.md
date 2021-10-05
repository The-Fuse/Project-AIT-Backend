# Project AIT BACKEND

A college-oriented platform for students to bring all the clubs on a single application with the motive for students to collaborate and access all the information in one place. And this repo contains the backend of this poject.

---
## Requirements

For development, you will only need:

* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js network app framework
* [MongoDB](https://www.mongodb.com/) - Database Program
* [Postman](https://www.postman.com/) - API Client
* [Studio3T](https://studio3t.com/) or [MongoDB Compass](https://www.mongodb.com/products/compass) - Managing DB

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
