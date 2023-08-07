import { Link } from 'react-router-dom'
import style from './navGeneral.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoAuxie from '../../assets/Logos/logoAuxie.svg'
import { logOut, resetToken } from '../../redux/Actions/actions'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import axios from 'axios'

const NavGeneral = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    // const navigate = useNavigate();
    const token = useSelector(state=>{
        return state.token;
    })

    const handleLogOut = async() => {
        try {
            console.log(user.googleId);
            if(user.googleId){
                const response = await axios.post(
                'http://localhost:3001/consumers/logout', { googleId:`${ user.googleId }`},{
                    headers:{
                        'authorization': `Bearer ${token}`
                    }
                })
                if (response) {
                    dispatch(logOut({}))
                }
            }
            dispatch(logOut({}))
            await signOut(auth);
            dispatch(resetToken())
            navigate('/')
        } catch (error) {
            console.error('error: ' + error.message)
            alert(error.message)
        }   
    }

    return (
        <nav className={style.navGeneral}>
            <div className={style.containerLeft}>
                {Object.keys(user).includes("services") ? (<div className={style.viewsGeneral}>
                    <Link to={'/homeauxie'}>
                        {' '}
                        <img
                        src={LogoAuxie}
                        alt="Logo Auxie"
                        className={style.logo}
                    />
                    </Link>
                </div>):(<div className={style.viewsGeneral}>
                    <Link to={'/homeconsumer'}>
                        {' '}
                        <img
                        src={LogoAuxie}
                        alt="Logo Auxie"
                        className={style.logo}
                    />
                    </Link>
                </div>)}
                
            </div>
            <div className={style.profile}>
            <Link to={'/help'}>
                <p>Ayuda</p>
            </Link>
        
            <p className={style.logOut} onClick={handleLogOut}>Desconectarse</p>
         
                <button>
                    <img
                        src={user.image}
                        // alt="imagen de perfil"
                        height="80rem"
                        width="80rem"
                        
                    />
                </button>
            </div>
        </nav>
    )
}

export default NavGeneral
