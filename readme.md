# unidb.js

**unidb.js** is a simple and powerful Node.js package that allows you to connect to multiple databases (PostgreSQL, MongoDB, MySQL, Redis, etc.) with a single command.

## 🚀 Installation

Install **unidb.js** via npm:
```sh
npm install unidb.js
```

## 📌 Usage

Import the package and connect to any supported database using a single function call.

### 1️⃣ **PostgreSQL**
```javascript
require("dotenv").config();
const db = require("unidb.js");

(async () => {
    const postgres = await db.connect(process.env.POSTGRES_URL); ##for sequelize use "await connect(process.env.POSTGRES_URL, true);"
    console.log("✅ PostgreSQL connected!");
})();
```

### 2️⃣ **MongoDB**
```javascript
require("dotenv").config();
const db = require("unidb.js");

(async () => {
    const mongo = await db.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected!");
})();
```

### 3️⃣ **MySQL**
```javascript
require("dotenv").config();
const db = require("unidb.js");

(async () => {
    const mysql = await db.connect(process.env.MYSQL_URL);
    console.log("✅ MySQL connected!");
})();
```

### 4️⃣ **Redis**
```javascript
require("dotenv").config();
const db = require("unidb.js");

(async () => {
    const redis = await db.connect(process.env.REDIS_URL);
    console.log("✅ Redis connected!");
})();
```
## 📜 Environment Variables
Set your database URLs in a `.env` file:
```
POSTGRES_URL=your_postgres_connection_string
MONGO_URL=your_mongodb_connection_string
MYSQL_URL=your_mysql_connection_string
REDIS_URL=your_redis_connection_string
```

## 📖 License
This package is open-source and available under the MIT license.

---

🚀 **Now you can connect to multiple databases with a single command!**

