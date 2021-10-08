const express = require('express')
const app = express()
const port = 3000

// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://juyoung:qwer1234@cluster0.xplpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connection...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 