const Pool = require('pg').Pool

const pool = new Pool({
    user: 'iillgaqgbgvgmr',
    password: '98a352d0c1677fef924f614d731a2c2fccfa363b43fa51ce74e79091dde0d087',
    host:'ec2-54-194-211-183.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dbbn6dhouam2im',
    ssl: {rejectUnauthorized: false}
});

module.exports = pool
