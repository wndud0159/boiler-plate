const express = require('express')
const app = express()
const port = 5000

const { User } = require('./models/User')
const config = require('./config/key')
const cookieParser = require('cookie-parser')
const {auth} = require('./middleware/auth')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())



// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
const mongoose = require('mongoose')
const { request } = require('express')
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connection...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => res.send('hello world juyoung!!'))


app.post('/api/users/register', (req, res) => {
    // 회원가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

})

app.post('/api/users/login', (req, res) => {
    console.log('확인')
    //1. 요청된 이메일을 데이터 베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        //2. 비밀번호가 같은지 확인한다
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                loginSuccess: false,
                message: "비밀번호가 틀렸습니다."
            })
        })

        //3. 비밀번호까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            //토큰을 저장한다. 어디에? 쿠키? 로컬? 쿠키에 할게요
            res.cookie("x_auth", user.token)
                .status(200)
            .json({loginSuccess: true, userId: user._id})
        })

    })
})

app.get('/api/users/auth', auth, (req, res) => {
    //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication 이 true라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: "" },
        (err, user) => {
            if (err) return res.json({ success: false, err })
            return res.status(200).send({
                success: true
            })
        }
    )
})

app.get('/api/hello', (req, res) => {
    res.send("안녕하세요?")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 