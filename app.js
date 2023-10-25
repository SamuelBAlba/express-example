// imports express libarry
const express = require('express');
// invoke express and return application
const app = express();
const studentController = require('./controllers/studentsController');

app.use('/students', studentController);

app.get('/', (req, res) => {
    res.send('Hello World')
});

// app.get('/dashboard', (req, res) => {
//     res.send('at the dash')
// })

// exposes app to the outside world for it could be imported elsewhere
module.exports = app;

