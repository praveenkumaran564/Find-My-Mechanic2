import React, {useContext, useState} from 'react'
const auth = React.createContext()

export default function Userauth (props) {
    const [userName, setUserName] = useState("")
    const [userId,setuserId]=useState('')

    const login = (name,id) => {
        setUserName(name)
        setuserId(id)
    }
    const logout = () => {
        setUserName("")
    }
  return (
    <div>
         <div>
            <auth.Provider value={{login,userName,userId,logout}}>
                {props.children}
            </auth.Provider>
        </div>
    </div>
  )
}
export function Authuse() {
    return useContext(auth)
}

