const {User} = require('../models/User')

let auth = (req, res, next) => {
    //인증처리를 하는곳
    // 1. 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;
    console.log('token', token)
    // 2. 토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        console.log(user)
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        
        req.token = token
        req.user = user
        next()
    })
    // 3. 유저가 있으면 인증 ok
    // 4. 유저가 없으면 인증 no
}

module.exports = {auth}