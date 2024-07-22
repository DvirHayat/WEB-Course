//const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
//const bodyParser = require('body-parser');
const signupRouter = require('./routes/user_signup');
const signinRouter = require('./routes/user_signin');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://socialNetwork:socialNetwork@cluster0.fnlkhjz.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
