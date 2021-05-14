const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const db = require('./DB')
const hrRouter = require('./routes/hrRouter')
const jobOfferRouter = require('./routes/jobOfferRouter')
const registerRouter = require('./routes/registerRouter')
// const studentRouter = require('./routes/studentRouter')
const passport = require('passport')
const passportFunc = require('./config/passport')

const path = require('path');
const app = express()
const PORT = process.env.PORT || 4201

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs')
app.set('trust proxy', true);

db.on('error', () => {
    console.log(chalk.red('Connection error'))
})
app.listen(PORT, () => {
    console.log(`${chalk.green('tech_career-employers-team2')} ${chalk.yellow('live and up on port')} ${chalk.red(PORT)}`);
})

app.use(passport.initialize());
app.use('/register', registerRouter);
app.use('/hrs', hrRouter);
app.use('/jobOffers', jobOfferRouter);
// app.use('/student', studentRouter);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}