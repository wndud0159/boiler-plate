import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props) {

    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('ERROR..')
                }
            })
        
       
    }

    return (
        <div className=" flex items-center w-full justify-center h-screen">
            <form className=" flex flex-col" action="" onSubmit={onSubmitHandler}>
                <label htmlFor="">Email</label>
                <input className=" border outline-none  focus:ring-2" type="email" value={Email} onChange={onEmailHandler} />
                <label htmlFor="">Password</label>
                <input className=" border outline-none  focus:ring-2" type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>Login</button>

            </form>
        </div>
    )
}

export default LoginPage
