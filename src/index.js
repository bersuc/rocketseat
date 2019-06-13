const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user001:vusdzhrt9YE3b87V@cluster0-lasrg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
});


app.use(require('./routes'));

app.listen(3333);