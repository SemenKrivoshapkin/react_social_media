import React, { useCallback, useState } from 'react'
import './Registr.css'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registr = () => {
    const [data, setData] = useState({
        "email": "", 
        "password": "",
        "confirmPassword": "", 
        "name": "", 
        "surName": "", 
    })
    
    const submit = useCallback(async () => {
        
        if(data.password === data.confirmPassword) {
           
           const objToSend = {
            "email": data.email, 
            "password": data.password,
            "name": data.name, 
            "surName": data.surName, 
        }
            const result = await fetch(`http://localhost:8000/auth/register`, {
                method: "POST",
                body: JSON.stringify(objToSend),
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            if(result.status === 201) {
                const {accessToken, refreshToken} = await ((await result).json())
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
                router('/login')
            }
        } else {
            toast.error('Password is not correct!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }, [data])

    const router = useNavigate()
  return (
    <div className='registration__container'>
        <div className='registration__container__switch'>
            <button onClick={() => router('/login')}>Вход</button>
            <button onClick={() => router('/register')}>Регистрация</button>
        </div>
        <div className='registration__container__inputs'>
            <input type="text" placeholder='Имя' value={data.name}
            onChange={e => setData(prev => ({...prev, name: e.target.value}))}
             />
            <input type="text" placeholder='Фамилия' value={data.surName}
            onChange={e => setData(prev => ({...prev, surName: e.target.value}))}
             />
            <input type="email" placeholder='E-mail' value={data.email}
            onChange={e => setData(prev => ({...prev, email: e.target.value}))}
            />
            <input type="password" placeholder='Пароль' value={data.password}
            onChange={e => setData(prev => ({...prev, password: e.target.value}))}
            />
            <input type="password" placeholder='Повторите пароль' value={data.confirmPassword}
            onChange={e => setData(prev => ({...prev, confirmPassword: e.target.value}))}
            />
        </div>
        <div className='registration__container__btns'>
            <button onClick={submit}>Регистрация</button>
            <hr></hr>
        </div>
    </div>
  )
}

export default Registr