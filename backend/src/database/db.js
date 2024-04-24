const { Pool } = require('pg');
var pg = require('pg');
require('dotenv').config()

var types = pg.types;
types.setTypeParser(1114, function(stringValue){
    return new Date(stringValue+ "+0000")
})

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

module.exports = {
    pool
};