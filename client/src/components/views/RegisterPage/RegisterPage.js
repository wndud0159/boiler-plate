import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login')
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
                <label htmlFor="">Name</label>
                <input className=" border outline-none  focus:ring-2" type="text" value={Name} onChange={onNameHandler} />
                <label htmlFor="">Password</label>
                <input className=" border outline-none  focus:ring-2" type="password" value={Password} onChange={onPasswordHandler} />
                <label htmlFor="">Confirm Password</label>
                <input className=" border outline-none  focus:ring-2" type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>회원가입</button>

            </form>
        </div>
    )
}

export default RegisterPage
