const mysql = require("mysql2/promise");

async function connect(connectionString) {
    try {
        const connection = await mysql.createConnection(connectionString);
        console.log("Connected to MySQL");
        return connection;
    } catch (error) {
        console.error("MySQL Connection Error:", error);
        throw error;
    }
}

module.exports = { connect };
