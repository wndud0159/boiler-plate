import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

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
    const onAdminPageHandler = () => {
        props.history.push('/admin')
    }

    
    return (
        <div className=" flex space-y-2 flex-col items-center w-full justify-center h-screen">
            시작페이지
            <button className=" bg-blue-200 px-10 py-3 rounded-lg shadow-xl"
            onClick={onLogoutHandler}  
            >로그아웃</button>
            <button className=" bg-blue-200 px-10 py-3 rounded-lg shadow-xl"
            onClick={onAdminPageHandler}  
            >관리자페이지</button>

        </div>
    )
}

export default withRouter(LadingPage) 
