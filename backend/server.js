const express = require('express');
const app = express();
const cors = require('cors');
const model = require('./user.model').default;
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/usercollectiondb');

app.post('/register', async(req, res) => {
    try {
        const user = await model.create({
            branch: req.body.branch,
            username: req.body.username,
            emailAddress: req.body.emailAddress,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        });
        res.json({
            status: 'User created successfully'
        });

    } catch (error) {
        res.json({
            status: 'Error occured'
        });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});