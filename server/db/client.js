// Require Client from pg
const { Client } = require(`pg`);

// Establishing connect to database
const tixoxo = `tixoxo`
const client = new Client(`postgres://localhost:5432/${tixoxo}`)

// Connect to the database
client.connect();

// Export for use in other files
module.exports = client;
