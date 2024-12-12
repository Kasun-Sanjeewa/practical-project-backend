const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);


app.get('/getUsers', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/addUser', (req, res) => {
    controller.addUsers(req.body, (callback) => {
        res.send();
    });
});


app.put('/updateUser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});


app.delete('/deleteUser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});



app.use(express.json());

module.exports = app;
