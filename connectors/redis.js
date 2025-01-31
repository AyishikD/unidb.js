const { createClient } = require("redis");

async function connect(connectionString) {
    try {
        const client = createClient({ url: connectionString });

        client.on("connect", () => console.log("✅ Connected to Redis successfully."));
        client.on("error", (err) => console.error("❌ Redis connection error:", err.message));

        await client.connect(); 
        try {
            const pong = await client.ping();
            console.log(`✅ Redis ping response: ${pong}`); // Should log "PONG"
        } catch (pingError) {
            console.error("❌ Redis ping failed:", pingError.message);
        }

        return client; 
    } catch (error) {
        console.error("❌ Redis Connection Error:", error.message);
        throw error;
    }
}

module.exports = { connect };
