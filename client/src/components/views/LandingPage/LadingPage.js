import React from 'react'
import axios from 'axios'

function LadingPage(props) {

    const onLogoutHandler = () => {
        axios.get('/api/users/logout')
            .then((response) => {
                console.log('logout success : ', response.data)
                props.history.push('/login')
            }).catch(error => {
                console.log('error by logout : ', error)
            })
    }

    return (
        <div className=" flex flex-col items-center w-full justify-center h-screen">
            시작페이지
            <button className=" bg-blue-200 px-10 py-3 rounded-lg shadow-xl"
            onClick={onLogoutHandler}  
            >로그아웃</button>
        </div>
    )
}

export default LadingPage
