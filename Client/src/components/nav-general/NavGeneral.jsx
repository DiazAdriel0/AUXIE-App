import { Link } from 'react-router-dom'
import style from './navGeneral.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import LogoAuxie from '../../assets/Logos/logoAuxie.svg'
import { logOut } from '../../redux/Actions/actions'
import { Popper, Box } from '@mui/material'
import { useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener'

const NavGeneral = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.loggedUser)
    const [profileMenu, setProfileMenu] = useState(null)

    const handleClick = (event) => {
        setProfileMenu(profileMenu ? null : event.currentTarget)
    }

    const handleClickAway = () => {
        setProfileMenu(null)
    }

    const open = Boolean(profileMenu)
    const id = open ? 'profileMenu' : undefined

    const handleLogOut = () => {
        dispatch(logOut({}))
    }

    return (
        <nav className={style.navGeneral}>
            <div className={style.containerLeft}>
                {Object.keys(user).includes('services') ? (
                    <div className={style.viewsGeneral}>
                        <Link to={'/homeauxie'}>
                            <img
                                src={LogoAuxie}
                                alt="Logo Auxie"
                                className={style.logo}
                            />
                        </Link>
                    </div>
                ) : (
                    <div className={style.viewsGeneral}>
                        <Link to={'/homeconsumer'}>
                            <img
                                src={LogoAuxie}
                                alt="Logo Auxie"
                                className={style.logo}
                            />
                        </Link>
                    </div>
                )}
            </div>
            <div className={style.profile}>
                {/* Botón para desplegar menu con opciones del perfil*/}
                <button onClick={handleClick} aria-describedby={id}>
                    <img
                        src={user.image}
                        alt="imagen de perfil"
                        height="80rem"
                        width="80rem"
                    />
                </button>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={profileMenu}
                    placement="bottom"
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
                                element: 'profileMenu',
                            },
                        },
                    ]}
                >
                    {Object.keys(user).includes('services') ? (
                        <>
                        {/*Botones para el perfil auxie*/}
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Box className={style.profileMenu}>
                                    <Link to={'/homeauxie'}>
                                        <p className={style.profileButtonTop}>
                                            Perfil
                                        </p>
                                    </Link>
                                    <Link to={'/help'}>
                                        <p
                                            className={
                                                style.profileButtonMiddle
                                            }
                                        >
                                            Ayuda
                                        </p>
                                    </Link>
                                    <Link to={'/'} onClick={handleLogOut}>
                                        <p
                                            className={
                                                style.profileButtonBottom
                                            }
                                        >
                                            Cerrar sesión
                                        </p>
                                    </Link>
                                </Box>
                            </ClickAwayListener>
                        </>
                    ) : (
                        <>
                         {/*Botones para el perfil consumer*/}
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Box className={style.profileMenu}>
                                    <Link to={'/homeconsumer'}>
                                        <p className={style.profileButtonTop}>
                                            Perfil
                                        </p>
                                    </Link>
                                    <Link to={'/help'}>
                                        <p
                                            className={
                                                style.profileButtonMiddle
                                            }
                                        >
                                            Ayuda
                                        </p>
                                    </Link>
                                    <Link to={'/'} onClick={handleLogOut}>
                                        <p
                                            className={
                                                style.profileButtonBottom
                                            }
                                        >
                                            Cerrar sesión
                                        </p>
                                    </Link>
                                </Box>
                            </ClickAwayListener>
                        </>
                    )}
                </Popper>
            </div>
        </nav>
    )
}

export default NavGeneral
