//estilos
import style from './navGeneral.module.scss'

//hooks
import { useSelector } from 'react-redux'

//Components
import LogoAuxie from '../logo/logoAuxie/LogoAuxie'
import ProfilePic from '../profile-pic/profile-pic-auxie/ProfilePic'
import LogoClient from '../logo/logoClient/LogoCLient'

//assets

const NavGeneral = () => {
    const user = useSelector((state) => state.loggedUser)

    const isAuxie = Object.keys(user).includes('services') ? true : false


    const token = useSelector((state) => {
        return state.token
    })

    const handleClick = (event) => {
        setProfileMenu(profileMenu ? null : event.currentTarget)
    }

    const handleRedirect = (e) => {
        if (e.target.innerText === 'Perfil') return navigate('/profile')
        if (e.target.innerText === 'Ayuda') return navigate('/help')
    }

    const handleLogOut = async () => {
        try {
            if (user.googleId) {
                const response = await axios.post(
                    '/consumers/logout',
                    { googleId: `${user.googleId}` },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                )
                if (response) {
                    await signOut(auth)
                    dispatch(logOut({}))
                    dispatch(resetToken())
                    return navigate('/')
                }
            }
            dispatch(logOut({}))
            await signOut(auth)
            dispatch(resetToken())
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
        <nav className={style.navGeneral}>
            {isAuxie ? (
                <>
                    <LogoAuxie />
                    <ProfilePic />
                </>
            ) : (
                <>
                    <LogoClient />
                    <ProfilePic />
                </>
            )}
        </nav>
    )
}

export default NavGeneral
