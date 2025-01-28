const { createPool } = require('mysql2')

const sql = createPool({
    // host : '34.124.234.56',
    host : 'localhost',
    user : 'root',
    password : '7tQ!V3kP$5lZ',
    database : 'aksdb',
    connectionLimit: 10
})


module.exports = sql

