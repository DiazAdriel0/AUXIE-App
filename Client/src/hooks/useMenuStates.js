import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { menuOpen } from '../redux/Actions/actions'
const useMenuStates = () => {
    const dispatch = useDispatch()

    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)

    useEffect(() => {
        if (logInMenu || registerMenu) {
            dispatch(menuOpen(true))
        } else {
            dispatch(menuOpen(false))
        }
    }, [logInMenu, registerMenu])

    const handlerLogIn = () => {
        setLogInMenu(!logInMenu)
        setRegisterMenu(false)
    }

    const handlerRegister = () => {
        setRegisterMenu(!registerMenu)

        setLogInMenu(false)
    }

    return {
        logInMenu,
        registerMenu,

        handlerLogIn,
        handlerRegister,
        setLogInMenu,
        setRegisterMenu,
    }
}

export default useMenuStates
