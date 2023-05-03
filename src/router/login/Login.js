import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { auth } from '../../server'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { logIn } from '../../context/action/action'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLogin = async (e) => {
        e.preventDefault()
        let user = { email, password }
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res)
                dispatch(logIn(res.user))
            })
            .catch(res => console.log(res))
    }
    return (
        <div className='login'>
            <div className="login__box">
                <h3 className='login__title'>Login</h3>
                <form onSubmit={handleLogin} className="login__form">
                    <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className='login__formInp' placeholder='Email' />
                    <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className='login__formInp' placeholder='Password' />
                    <button className='login__formBtn' type='submit'>Kirish</button>
                </form>
            </div>
        </div>
    )
}

export default Login