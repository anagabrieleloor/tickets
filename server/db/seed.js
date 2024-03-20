// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION


//pulling in connection to my local database
const client = require("./client");

// const { createEvent, getAllEvents } = require("./helpers/events");
// const { createUser, getAllUsers } = require("./helpers/users");
// const { createRsvp, getAllRsvps } = require("./helpers/tickets");


const { users, tickets, events } = require("./seedData");
const { createComment } = require("./helpers/comments");

// Drop Tables
const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
          DROP TABLE IF EXISTS users;
          DROP TABLE IF EXISTS tickets;
          DROP TABLE IF EXISTS events;
      `);
    console.log("Tables dropped!");
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
};

//Create Tables
const createTables = async () => {
  console.log("Building tables...");
  await client.query(`
          CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            first_name text NOT NULL,
            last_name text NOT NULL,
            email text UNIQUE NOT NULL,
            password text NOT NULL,
            billing_address text,
            payment_verified boolean
          );
          CREATE TABLE tickets (
            ticket_id SERIAL PRIMARY KEY,
            available BOOLEAN DEFAULT TRUE,
            price numeric, 
            resale boolean,
            "user" INTEGER REFERENCES users(user_id),
            "event" INTEGER REFERENCES users(event_id)
        );
          CREATE TABLE events (
              event_id SERIAL PRIMARY KEY,
              name text NOT NULL,
              description text,
              venue text,
              address text, 
              datetime TIMESTAMP,
              category text [],
              organizer text,
              creator INTEGER REFERENCES users(user_id)          
          );
          
      `);
  console.log("Tables built!");
};

//Insert mock data from seedData.js


//Create user
const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await createUser(user);
    }
    console.log("Created user");
  } catch (error) {
    throw error;
  }
};

//Create tickets
const createInitialTickets = async () => {
    try {
      //Looping through the "tickets" array from seedData
      for (const ticket of tickets) {
        //Insert each ticket into the table
        await createticket(ticket);
      }
      console.log("Created ticket");
    } catch (error) {
      throw error;
    }
  };

//Create Events
const createInitialEvents = async () => {
  try {
    for (const event of events) {
      await createEvent(event);
    }
    console.log("Created event");
  } catch (error) {
    throw error;
  }
};


//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
  try {
    //Run our functions
    await dropTables();
    await createTables();

    //Generating starting data
    console.log("Starting to seed...");
    await createInitialUsers();
    await createInitialTickets();
    await createInitialEvents();
  } catch (error) {
    console.error(error);
  } finally {
    //Close our connection
    await client.end();
  }
};

rebuildDb();