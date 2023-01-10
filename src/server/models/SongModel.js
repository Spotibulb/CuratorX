// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const pg = require('pg');
const myURI = 'postgres://oanzquni:177QXyLA6eWLpInvD08FmmdbEjYxYvqN@mahmud.db.elephantsql.com/oanzquni';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const db = new pg.Pool({
  connectionString: URI
});

// CREATE TABLE Message (message varchar(255), password varchar(255), created_at timestamp) 
// ^^ an example db thing to use ^^ 
// ^^ commented out because I created the table in the SQL browser already, just wanted to show what command i used

module.exports = {
  query: (text, params, cb) => {
    console.log('Executed query ', text);
    return db.query(text, params, cb);
  }
}; // <-- export your model