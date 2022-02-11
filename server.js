const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name:'Mojahid'},
    {name:'Yassir'}
]

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

// colons are used as variables that be viewed in the params
app.get('/users/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req, res) {
    // Typically passwords are encrypted using somthing like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;

    console.log(username + "\n" + password);
    // This should come from the database
    const mockUsername = "mojahid";
    const mockPassword = "1337";

    if (username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'Password and Username match!',
            token: 'Encrypted token goes here'
        })
    }
    else {
        res.json({
            success: false,
            message: 'Password and Username do not match'
        })
    }
})

app.listen(8000, function() {
    console.log("server is listening");
})