const Pool = require('pg').Pool

const pool = new Pool({
    user: 'wuvjgpywlujgsu',
    password: 'b962c58ea4dbe2d2968f56cfba47efc0446d089ce46ad09185efb520b8532b7c',
    host:'ec2-3-248-121-12.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'da10vhn1h578hf',
    ssl: {rejectUnauthorized: false}
});

module.exports = pool
