# 🚀 REST API for User Data

A simple CRUD REST API built with Node.js and Express for managing user data.



# 🌐 Live API

Base URL:
https://rest-api-for-user-data-2.onrender.com

Get all users:
https://rest-api-for-user-data-2.onrender.com/users



# 📌 Features

* Create, Read, Update, Delete (CRUD) operations
* RESTful API structure
* Input validation (name & email required)
* Proper HTTP status codes
* In-memory data storage



# 🛠️ Tech Stack

* Node.js
* Express.js


# 📡 API Endpoints

# 🔹 GET all users

GET /users

```bash
curl https://rest-api-for-user-data-2.onrender.com/users
```



# 🔹 GET user by ID

GET /users/:id

```bash
curl https://rest-api-for-user-data-2.onrender.com/users/1
```



# 🔹 CREATE a new user

POST /users

```bash
curl -X POST https://rest-api-for-user-data-2.onrender.com/users \
-H "Content-Type: application/json" \
-d "{\"name\":\"Thami\",\"email\":\"test@test.com\"}"
```



# 🔹 UPDATE a user

PUT /users/:id

```bash
curl -X PUT https://rest-api-for-user-data-2.onrender.com/users/1 \
-H "Content-Type: application/json" \
-d "{\"name\":\"Updated Name\",\"email\":\"updated@test.com\"}"
```


# 🔹 DELETE a user

DELETE /users/:id

```bash
curl -X DELETE https://rest-api-for-user-data-2.onrender.com/users/1
```


# ⚙️ Running Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

4. Open in browser:

```bash
http://localhost:3000/users
```



# 🧠 Notes

* Data is stored in memory (resets when server restarts)
* Designed for learning and demonstration purposes



# 📦 Submission

* GitHub Repo: (add your repo link here)
* Live API: https://rest-api-for-user-data-2.onrender.com/users


# 👨‍💻 Author

Thami Dlamini
