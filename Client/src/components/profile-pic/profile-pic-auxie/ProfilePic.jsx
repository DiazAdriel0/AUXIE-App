import style from './profilePic.module.scss'
//estilos

//hooks
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//firebase
import { auth } from '../../../config/firebase-config'
import { signOut } from 'firebase/auth'

//axios
import axios from 'axios'

//actions

import { logOut } from '../../../redux/actions/actions'

//Material UI
import { Popper, Box } from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener'
const ProfilePicAuxie = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    const nightMode = useSelector((state) => state.nightMode)
    const [profileMenu, setProfileMenu] = useState(null)

    const isAuxie = Object.keys(user).includes('services') ? true : false

    const handleClick = (event) => {
        setProfileMenu(profileMenu ? null : event.currentTarget)
    }

    const handleRedirect = (e) => {
        if (e.target.innerText === 'Perfil') return navigate('/profile')
        if (e.target.innerText === 'Ayuda') return navigate('/help')
        if (e.target.innerText === 'Servicios')
            return navigate('/requestedservices')
    }

    const handleLogOut = async () => {
        try {
            if (user.googleId) {
                if (isAuxie) {
                    const response = await axios.post('/providers/logout', {
                        googleId: `${user.googleId}`,
                    })
                    if (response) {
                        await signOut(auth)
                        dispatch(logOut({}))
                        return navigate('/')
                    }
                } else {
                    const response = await axios.post('/consumers/logout', {
                        googleId: `${user.googleId}`,
                    })
                    if (response) {
                        await signOut(auth)
                        dispatch(logOut({}))
                        return navigate('/')
                    }
                }
            }
            dispatch(logOut({}))
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.error('error: ' + error.message)
            alert(error.message)
        }
    }
    const handleClickAway = () => {
        setProfileMenu(null)
    }

    const open = Boolean(profileMenu)
    const id = open ? 'profileMenu' : undefined

    return (
        <div className={style.profile}>
            {/* Botón para desplegar menu con opciones del perfil*/}
            <button
                onClick={handleClick}
                aria-describedby={id}
                className={style.buttonPic}
            >
                <img
                    className={style.img}
                    src={user.image?.secure_url}
                    alt='imagen de perfil'
                />
            </button>
            <Popper
                id={id}
                open={open}
                anchorEl={profileMenu}
                placement='bottom'
                disablePortal={false}
                modifiers={[
                    {
                        name: 'flip',
                        enabled: false,
                        options: {
                            altBoundary: false,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            altAxis: true,
                            altBoundary: true,
                            tether: false,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'arrow',
                        enabled: true,
                        options: {
                            element: profileMenu,
                        },
                    },
                ]}
            >
                {isAuxie ? (
                    <>
                        {/*Botones para el perfil auxie*/}
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box className={style.profileMenu}>
                                <p
                                    onClick={handleRedirect}
                                    className={style.profileButtonTop}
                                >
                                    Perfil
                                </p>
                                <p
                                    onClick={handleRedirect}
                                    className={style.profileButtonMiddle}
                                >
                                    Ayuda
                                </p>
                                <p
                                    onClick={handleLogOut}
                                    className={style.profileButtonBottom}
                                >
                                    Cerrar sesión
                                </p>
                            </Box>
                        </ClickAwayListener>
                    </>
                ) : (
                    <>
                        {/*Botones para el perfil consumer*/}
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box
                                className={
                                    nightMode
                                        ? style.profileMenuNight
                                        : style.profileMenu
                                }
                            >
                                <p
                                    onClick={handleRedirect}
                                    className={style.profileButtonTop}
                                >
                                    Perfil
                                </p>
                                <p
                                    onClick={handleRedirect}
                                    className={style.profileButtonMiddle}
                                >
                                    Servicios
                                </p>
                                <p
                                    onClick={handleRedirect}
                                    className={style.profileButtonMiddle}
                                >
                                    Ayuda
                                </p>
                                <p
                                    onClick={handleLogOut}
                                    className={style.profileButtonBottom}
                                >
                                    Cerrar sesión
                                </p>
                            </Box>
                        </ClickAwayListener>
                    </>
                )}
            </Popper>
        </div>
    )
}

export default ProfilePicAuxie
