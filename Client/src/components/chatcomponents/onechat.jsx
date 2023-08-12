import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Onechat = ({ uid }) => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
        getUser(uid)
    }, [])
    const getUser = async (uid) => {
        try {
            const response = await axios.get(`/consumers/${uid}`)
            if (response) {
                setUser(response.data)
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <div>
            <h1>tiki</h1>
            {/* <img
        src="https://images.pexels.com/photos/17847846/pexels-photo-17847846/free-photo-of-sunset-fashion-beach-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
    /> */}
            <div>
              <a><span>{user.firstName + ' ' + user.lastName}</span></a>
                
                <p>Hello!</p>
            </div>
        </div>
    )
}
export default Onechat
