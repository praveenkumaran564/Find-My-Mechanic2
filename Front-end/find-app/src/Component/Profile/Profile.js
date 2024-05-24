import React from 'react'
import { Authuse } from '../Userauth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navi=useNavigate()
    const user=Authuse()
  return (
    <div>Profile Name ---- {user.userName}<br/>
    {user.userName?<button onClick={()=>user.logout()}>logout</button>:<button onClick={()=>navi('/login')}>login</button>}
    </div>
  )
}

export default Profile