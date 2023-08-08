import { useState, useEffect } from 'react'

const useMenuStates = () => {
    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)
    const [logOrRegView, setLogOrRegView] = useState(false)

    useEffect(() => {
        if (logInMenu || registerMenu) {
            setLogOrRegView(true)
        } else {
            setLogOrRegView(false)
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
        logOrRegView,
        handlerLogIn,
        handlerRegister,
        setLogInMenu,
        setRegisterMenu,
    }
}

export default useMenuStates
