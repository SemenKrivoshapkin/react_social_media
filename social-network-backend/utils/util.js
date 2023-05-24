import jwt from 'jsonwebtoken'

const generateToken = (email, password) => {
    
    return {
        accessToken: jwt.sign(
            {password, email}, 
            'itcbootcamp_access', 
            {expiresIn: '10m'},
            ),
        refreshToken: jwt.sign(
            {password, email}, 
            'itcbootcamp_refresh', 
            {expiresIn: '30m'},
            )
    }
}

export default generateToken