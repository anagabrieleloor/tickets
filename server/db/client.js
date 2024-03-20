// Require Client from pg
const { Client } = require(`pg`);


const dbName = `tixoxo`

//Establishing connect to database
const client = new Client(`postgres://localhost:5432/${tixoxo}`)


//Export for use in other files
module.exports = client;