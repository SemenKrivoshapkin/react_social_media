import React, { useCallback, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router'

const Login = () => {
    const [data, setData] = useState()
    
    
    const submit = useCallback( async () => {
        if(!data?.email || !data?.password) return;
        try {
            
                    const res = await fetch(`http://localhost:8000/auth/login`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                if(res.status===200) {
                    router('/home')
                } 
        } catch (error) {
            console.log(error)
        }
    }, [data])

    const router = useNavigate()

  return (
    <div className='login__container'>
        <div className='login__container__switch'>
            <h4 onClick={() => router('/login')}>Вход</h4>
            <h4 onClick={() => router('/register')}>Регистрация</h4>
        </div>
        <div className='login__container__inputs'>
            <input type="email" placeholder='E-mail'
                onChange={e => setData(prev => ({...prev, email: e.target.value}))}
            />
            <input type="password" placeholder='Пароль' 
                onChange={e => setData(prev => ({...prev, password: e.target.value}))} 
            />
        </div>
        <div>
            <label>
                <input type="checkbox"
                onChange={e => setData(prev => ({...prev, rememberMe: e.target.checked}))}
                />
                Запомнить меня
            </label>
        </div>
        <div className='login__container__btns'>
            <button onClick={submit}>Войти</button>
            <hr></hr>
            <a href='#'>Забыли пароль?</a>
        </div>
    </div>
  )
}

export default Login