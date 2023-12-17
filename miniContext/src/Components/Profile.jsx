import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
import Login from './Login'
function Profile({username}) {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} Your Password is {user.password} </div>
}

export default Profile

