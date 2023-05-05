import {BrowserRouter, Route} from 'react-router-dom'
import {Navigate, Routes} from 'react-router'
import Login from '../components/Login/Login.jsx'
import Registr from '../components/registration/Registr.jsx'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registr />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router