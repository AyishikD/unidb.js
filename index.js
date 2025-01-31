const postgres = require("./connectors/postgres");
const mysql = require("./connectors/mysql");
const mongo = require("./connectors/mongo");
const redis = require("./connectors/redis");

async function connect(connectionString) {
    if (!connectionString) {
        throw new Error("Connection string is required.");
    }

    if (connectionString.startsWith("postgres://") || connectionString.startsWith("postgresql://")) {
        return postgres.connect(connectionString);
    }
    if (connectionString.startsWith("mysql://")) {
        return mysql.connect(connectionString);
    }
    if (connectionString.startsWith("mongodb://") || connectionString.startsWith("mongodb+srv://")) {
        return mongo.connect(connectionString);
    }
    if (connectionString.startsWith("redis://") || connectionString.startsWith("rediss://")) {
        return redis.connect(connectionString);
    }

    throw new Error("Unsupported database type.");
}

module.exports = { connect };
