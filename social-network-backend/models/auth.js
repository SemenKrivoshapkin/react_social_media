import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },  
    avatarUrl: String, 
    
},
{
    timestamps: true
} 
)

const User = new mongoose.model('User', UserSchema)

export default User
