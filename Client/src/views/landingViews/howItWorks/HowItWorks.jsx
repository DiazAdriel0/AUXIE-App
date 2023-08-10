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

const HowItWorks = () => {
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)
    const isLogged = Object.keys(user).length > 0

    const [faq, setFaq] = useState(null)

    const handleFaqClick = (index) => {
        if (faq === index) {
            setFaq(null) // Si la pregunta ya está abierta, la cerramos
        } else {
            setFaq(index) // Si la pregunta está cerrada, la abrimos
        }
    }

    const faqs = [
        {
            question: '¿Qué hace un Auxie?  ',
            answer: 'Un auxie es un prestador de servicios que decide ofrecer sus habilidades a través de nosotros para una mayor seguridad y satifacción de todas las partes involucradas.',
        },
        {
            question: '¿Debo pagar para empezar a prestar mis servicios?  ',
            answer: 'Por supuesto que no, debes tener las herramientas y habilidades necesarias para realizar aquellos servicios que ofreces, pero si tu no ganas nosostros tampoco.',
        },
        // Agrega más preguntas y respuestas aquí
    ]

    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <div className={!menuLanding ? style.show : style.hide}>
                <div className={style.howItWorks}>
                    <h2>¿Cómo funciona Auxie?</h2>
                </div>
                <div>
                    <section className={style.layout}>
                        <div className={style.steps}>
                            <img
                                src={StepOne}
                                alt="Step one"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div className={style.step}>
                            <h3>PASO 1</h3>
                            <h2>El usuario abre la app</h2>
                            <p>
                                El usuario ingresa en la app y se registra con
                                el fin de comenzar a navegar. ¿Qué servicios
                                buscas?
                            </p>
                        </div>
                        <div className={style.steps}>
                            <img
                                src={StepTwo}
                                alt="Step two"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div className={style.step}>
                            <h3>PASO 2</h3>
                            <h2>El usuario elige un servicio</h2>
                            <p>
                                Navega entre todas nuestras categorias de
                                servicio y elegi el que más se adecua tus
                                necesidades.
                            </p>
                        </div>
                        <div className={style.steps}>
                            <img
                                src={StepThree}
                                alt="Step three"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div className={style.step}>
                            <h3>PASO 3</h3>
                            <h2>El usuario elige a un auxie</h2>
                            <p>
                                Navega entre nuestros auxies dependiendo de su
                                experiencia, tarifa o zona de trabajo. Tu auxie
                                perfecto esta esperando.
                            </p>
                        </div>
                        <div className={style.steps}>
                            <img
                                src={StepFour}
                                alt="Step four"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div className={style.step}>
                            <h3>PASO 4</h3>
                            <h2>El auxie realiza el servicio agendado</h2>
                            <p>
                                Agenda el trabajo con confianza nuestros auxies
                                son sumamente experimentados y sabran resolver
                                todo lo que les presentes.
                            </p>
                        </div>
                        <div className={style.steps}>
                            <img
                                src={StepFive}
                                alt="Step five"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div className={style.step}>
                            <h3>PASO 5</h3>
                            <h2>
                                El auxie y el cliente califican los servicios
                            </h2>
                            <p>
                                Al final de cada trabajo, los auxies y los
                                usuarios pueden calificarse mutuamente con 1-5
                                estrellas.
                            </p>
                        </div>
                    </section>
                    <div className={style.faqSection}>
                        <h2>Preguntas frecuentes</h2>
                        {faqs.map((faqItem, index) => (
                            <div className={style.faqItem} key={index}>
                                <div
                                    className={style.faqQuestion}
                                    onClick={() => handleFaqClick(index)}
                                >
                                    {faqItem.question}
                                    {faq === index ? (
                                        <img
                                            src={ArrowIcon}
                                            alt="arrow"
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={ArrowDown}
                                            alt="arrow down"
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
                </div>
            </div>
        </>
    )
}

export default HowItWorks
