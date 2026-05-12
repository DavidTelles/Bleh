const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
const userRouter = require('./routes/users');
app.use('/users', userRouter);

module.exports = app;