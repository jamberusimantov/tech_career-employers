const mongoose = require('mongoose')
const chalk = require('chalk')
const dotenv = require('dotenv');
dotenv.config();
const dbConnection = process.env.dbConnection

mongoose
    .connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(chalk.green('mongoDB connected'))
    })
    .catch(err => {
        console.log(chalk.red('Connection error', err.message));
    })

const db = mongoose.connection

module.exports = db