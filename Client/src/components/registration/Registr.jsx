import React, { useCallback, useState } from 'react'
import './Registr.css'
import { useNavigate } from 'react-router'

const Registr = () => {
    const [data, setData] = useState()
    
    const submit = useCallback(() => {
    }, [data])

    const router = useNavigate()
  return (
    <div className='registration__container'>
        <div className='registration__container__switch'>
            <button onClick={() => router('/login')}>Вход</button>
            <button onClick={() => router('/register')}>Регистрация</button>
        </div>
        <div className='registration__container__inputs'>
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Фамилия' />
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Пароль' />
            <input type="password" placeholder='Повторите пароль' />
        </div>
        <div className='registration__container__btns'>
            <button onClick={submit}>Регистрация</button>
            <hr></hr>
        </div>
    </div>
  )
}

export default Registr