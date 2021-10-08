const express = require('express')
const app = express()
const port = 5000
const { User } = require('./models/User')

const config = require('./config/key')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connection...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => res.send('hello world juyoung!!'))


app.post('/register', (req, res) => {
    // 회원가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 