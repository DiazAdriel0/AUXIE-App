import style from './guarantee.module.scss'
import NavLanding from '../../components/nav-landing/NavLanding'
const Guarantee = () => {
    return (
        <div className={style.guarantee}>
            <NavLanding />
            <div className={style.square}>
                <h1>La Garantia de felicidad AUXIE</h1>
                <p>
                    Tu felicidad es nuestra meta. Si no estas feliz, es nuestro
                    deber arreglarlo.
                </p>
            </div>
            <div className={style.anotherSection}>
                <h2>Tu experiencia importa</h2>
                <p>
                    AUXIE se esfuerza por conectarlo con el profesional adecuado
                    para usted y su hogar cada vez. Si no está satisfecho con la
                    calidad del servicio que reservó y pagó directamente en la
                    plataforma, enviaremos otro profesional sin cargo adicional
                    para su próxima reserva.
                </p>
                <div className={style.contactSection}>
                    <h2>¡Contáctanos!</h2>
                    <p>
                        Si no estás satisfecho, ¡háznoslo saber y trabajaremos
                        para corregirlo!
                    </p>
                    <button>Contactanos</button>
                </div>
            </div>
        </div>
    )
}

export default Guarantee
