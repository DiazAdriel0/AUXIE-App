import style from './howItWorks.module.scss'
import StepOne from '../../../assets/logos/StepOne.svg'
import StepTwo from '../../../assets/logos/StepTwo.svg'
import StepThree from '../../../assets/logos/StepThree.svg'
import StepFour from '../../../assets/logos/StepFour.svg'
import StepFive from '../../../assets/logos/StepFive.svg'
import ArrowIcon from '../../../assets/logos/ArrowIcon.svg'
import ArrowDown from '../../../assets/logos/ArrowDown.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import NavLanding from '../../../components/nav-landing/NavLanding'
import Footer from '../../../components/footer/Footer.jsx'

const HowItWorks = () => {
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)
    const isLogged = Object.keys(user).length > 0

    const [faq, setFaq] = useState(null)

    const handleFaqClick = (index) => {
        if (faq === index) {
            setFaq(null)
        } else {
            setFaq(index)
        }
    }

    const faqs = [
        {
            question: '¿Qué hace un Auxie?  ',
            answer: 'Un Auxie es un prestador de servicios que decide ofrecer sus habilidades a través de nosotros para una mayor seguridad y satisfacción de todas las partes involucradas.',
        },
        {
            question: '¿Debo pagar para empezar a prestar mis servicios?  ',
            answer: 'Por supuesto que no, debes tener las herramientas y habilidades necesarias para realizar aquellos servicios que ofreces, pero si tú no ganas nosotros tampoco.',
        },
    ]

    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <div className={!menuLanding ? style.show : style.hide}></div>
            <div className={style.howItWorks}>
                <h2>¿Cómo funciona Auxie?</h2>
            </div>
            <div>
                <section className={style.layout}>
                    <div className={style.steps}>
                        <img
                            src={StepOne}
                            alt='Step one'
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                    <div className={style.step}>
                        <h3>PASO 1</h3>
                        <h2>El usuario abre la app</h2>
                        <p>
                            El usuario ingresa en la app y se registra con el
                            fin de comenzar a navegar. ¿Qué servicios buscas?
                        </p>
                    </div>
                    <div className={style.steps}>
                        <img
                            src={StepTwo}
                            alt='Step two'
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                    <div className={style.step}>
                        <h3>PASO 2</h3>
                        <h2>El usuario elige un servicio</h2>
                        <p>
                            Navega entre todas nuestras categorías de servicio y
                            elegí el que más se adecua tus necesidades.
                        </p>
                    </div>
                    <div className={style.steps}>
                        <img
                            src={StepThree}
                            alt='Step three'
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                    <div className={style.step}>
                        <h3>PASO 3</h3>
                        <h2>El usuario elige a un Auxie</h2>
                        <p>
                            Navega entre nuestros Auxies dependiendo de su
                            experiencia, tarifa o zona de trabajo. Tu Auxie
                            perfecto está esperando.
                        </p>
                    </div>
                    <div className={style.steps}>
                        <img
                            src={StepFour}
                            alt='Step four'
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                    <div className={style.step}>
                        <h3>PASO 4</h3>
                        <h2>El Auxie realiza el servicio agendado</h2>
                        <p>
                            Agenda el trabajo con confianza nuestros Auxies son
                            sumamente experimentados y sabrán resolver todo lo
                            que les presentes.
                        </p>
                    </div>
                    <div className={style.steps}>
                        <img
                            src={StepFive}
                            alt='Step five'
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                    <div className={style.step}>
                        <h3>PASO 5</h3>
                        <h2>El Auxie y el cliente califican los servicios</h2>
                        <p>
                            Al final de cada trabajo, los Auxies y los usuarios
                            pueden calificarse mutuamente con 1-5 estrellas.
                        </p>
                    </div>
                </section>
                <>
                <div className={style.faqSection}>
                    <h2>Preguntas frecuentes</h2>
                    {faqs.map((faqItem, index) => (
                        <div className={style.faqItem} key={index} onClick={() => handleFaqClick(index)}>
                            <div
                                className={style.faqQuestion}
                                
                            >
                                {faqItem.question}
                                {faq === index ? (
                                    <img
                                        src={ArrowIcon}
                                        alt='arrow'
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={ArrowDown}
                                        alt='arrow down'
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                            </div>
                            {faq === index && (
                                <div className={style.faqAnswer}>
                                    {faqItem.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </>
            </div>
            <Footer />
        </>
    )
}

export default HowItWorks
