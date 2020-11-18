const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect DB
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.error(err));

// Use Routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
