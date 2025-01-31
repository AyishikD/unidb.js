const { Pool } = require("pg");
const { Sequelize } = require("sequelize");

async function connect(connectionString, useSequelize = false) {
    if (useSequelize) {
        const sequelize = new Sequelize(connectionString, {
            dialect: "postgres",
            logging: false,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false, 
                },
            },
        });

        try {
            await sequelize.authenticate();
            console.log("Connected to PostgreSQL using Sequelize");
            return sequelize; 
        } catch (error) {
            console.error("Sequelize PostgreSQL Connection Error:", error);
            throw error;
        }
    } else {
        const pool = new Pool({ connectionString });
        try {
            const client = await pool.connect();
            console.log("Connected to PostgreSQL using pg (Pool)");
            client.release();
            return pool; // Return Pool instance
        } catch (error) {
            console.error("pg Pool PostgreSQL Connection Error:", error);
            throw error;
        }
    }
}

module.exports = { connect };
