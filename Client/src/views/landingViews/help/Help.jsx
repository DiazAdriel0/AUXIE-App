import style from './help.module.scss'
import NavLanding from '../../../components/nav-landing/NavLanding'
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div>
            <NavLanding/>
            <div className={style.help}>
              <h2>Ayuda</h2>  
            </div>
            <div className={style.helpers}>
              <div className={style.square}>
                <h1>¡Te damos la bienvenida al soporte tecnico de AUXIE!</h1>
                <p>¿Cómo te podemos ayudar hoy?</p>
            </div>  
            <section className={style.options}>
                <Link to='/howItWorks'>
                <div> 
                ¿Cómo funciona AUXIE?/ Preguntas Frecuentes
                </div>
                </Link>
                <Link to='/guarantee'>
                <div>Garantia de felicidad</div>
                </Link>
                <Link to='/support'>
                <div>Soporte tecnico y reclamos</div>
                </Link>
            </section>
          
            </div>
        </div>
    )
}

export default Help

