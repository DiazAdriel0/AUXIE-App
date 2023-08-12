import { useSelector } from 'react-redux'

import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './aboutUs.module.scss'
import NavLanding from '../../../components/nav-landing/NavLanding'

const AboutUs = () => {
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)

    const isLogged = Object.keys(user).length > 0

    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <main className={!menuLanding ? style.main : style.mainHide}>
                <div className={style.about}>
                    <h2>Todo sobre Auxie</h2>
                </div>

                <section className={style.aboutboxes}>
                    <div className={style.card}>
                        <div className={style.cardfront}>
                            <center>
                                <h2>Que es Auxie?</h2>
                            </center>

                            <p>
                                Con pasión y dedicación, hemos creado una
                                plataforma que conecta de manera eficiente a
                                proveedores de servicios como jardineros,
                                plomeros, electricistas, limpieza y muchos más,
                                con clientes que buscan calidad y confiabilidad.
                            </p>

                            <p>
                                Únete a Auxie y descubre una manera simplificada
                                y eficiente de acceder a servicios de calidad.
                                Permítenos convertir tus proyectos en realidades
                                y brindarte la tranquilidad que mereces.
                                ¡Bienvenido a la comunidad Auxie!
                            </p>
                        </div>
                        <div className={style.cardback}>
                            {/* Reemplaza el contenido con tu bio */}
                            <div className={style.imageabout2}>
                                <img
                                    src="https://www.pngkey.com/png/full/319-3193616_handyman-services-competitors-revenue-and-employees-handyman.png"
                                    alt="Imagen"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardfront}>
                            <center>
                                <h2>Por qué usar auxie?</h2>
                            </center>
                            <p>
                                En Auxie, valoramos la excelencia y la
                                satisfacción del cliente por encima de todo.
                                Nuestra comunidad de profesionales altamente
                                capacitados y certificados está lista para
                                abordar cualquier desafío que se presente en tu
                                hogar.
                            </p>
                            <p>
                                Estamos comprometidos a empoderar a nuestros
                                proveedores para que alcancen el éxito y, al
                                mismo tiempo, ofrecer a nuestros clientes una
                                experiencia sin igual en el mundo de los
                                servicios de mantenimiento del hogar.
                            </p>
                        </div>
                        <div className={style.cardback}>
                            <div className={style.imageabout2}>
                                <img
                                    src="https://files.quantzig.com/wp-content/uploads/2020/11/customerSatisfaction.png"
                                    alt="Imagen"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.cardfront}>
                            <center>
                                <h2>Inicios de Auxie</h2>
                            </center>
                            <p>
                                Nuestra base en Latinoamérica es una fuente de
                                orgullo y fortaleza. La diversidad cultural y la
                                riqueza de conocimientos nos permiten aportar
                                una perspectiva única y enriquecedora a nuestra
                                plataforma.{' '}
                            </p>
                            <p>
                                Somos un equipo multicultural de programadores
                                full stack que fundó Auxie en julio de 2023.
                                Nuestra misión es transformar la forma en que se
                                accede y se contratan servicios de mantenimiento
                                del hogar.{' '}
                            </p>
                        </div>
                        <div className={style.cardback}>
                            {/* Reemplaza el contenido con tu bio */}
                            <img
                                src="https://ambientelegal.com/wp-content/uploads/2022/07/Map-of-Latin-America-5.png"
                                alt="Imagen"
                            />
                        </div>
                    </div>
                </section>
                {/* cards de about */}
                {/* ///cards/// */}
                <center>
                    <div className={style.about2}>
                        <h2>Conoce al equipo Auxie!</h2>{' '}
                    </div>
                </center>

                <div className={style.cardcontainer}>
                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src=" https://i.imgur.com/7mvXvFv.png" />
                                </div>
                                <div className={style.Name}>
                                    <p>Agustina Fernandez</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Front-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                {/* Reemplaza el contenido con tu bio */}
                                <div className={style.bio}>
                                    <p>
                                        Soy una apasionada Full Stack Developer
                                        con un sólido background en docencia, lo
                                        que me ha permitido liderar, planificar
                                        e idear con éxito todos los proyectos
                                        que me he propuesto.
                                        <br />
                                        <br />
                                        Mis preferencias se encuentran en el
                                        área del Front-end, donde combino mis
                                        habilidades técnicas y pedagógicas para
                                        crear experiencias de usuario
                                        excepcionales. Además de mis habilidades
                                        técnicas, cuento con valiosas
                                        habilidades blandas, incluyendo una
                                        comunicación efectiva que me ha
                                        facilitado trabajar en equipos
                                        colaborativos y liderar proyectos con
                                        éxito. <br />
                                        <br />
                                        Mi enfoque en la resolución de problemas
                                        me ha permitido enfrentar desafíos
                                        técnicos de manera eficiente y encontrar
                                        soluciones creativas. Con un nivel de
                                        inglés avanzado (C1), me siento cómoda
                                        trabajando en entornos diversos y
                                        colaborando con equipos multiculturales.
                                        Siempre estoy ansiosa por aprender y
                                        mantenerme actualizada con las últimas
                                        tendencias y avances tecnológicos.
                                        ¡Estoy emocionada por seguir creciendo
                                        como profesional, contribuyendo con mi
                                        experiencia y pasión por el desarrollo
                                        web en proyectos que tengan un impacto
                                        positivo en la sociedad!
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/AgustinaFernandez01"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/agustina-fern%C3%A1ndez-138b67272/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>

                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://media.licdn.com/dms/image/D4E03AQHcMdx0oFKtoA/profile-displayphoto-shrink_400_400/0/1690407183115?e=1696464000&v=beta&t=RQ4KpJ48pmfPcjFj-O5HkKLU3HYJOhiIyDtMLQOgZXI"></img>
                                </div>
                                <div className={style.Name}>
                                    <p>Carlos Cornelio</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Front-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                {/* Reemplaza el contenido con tu bio */}
                                <div className={style.bio}>
                                    <p>
                                        I&apos;m originally a Biochemical
                                        Engineer with a specialization in Food
                                        Science. I&apos;ve always been intrigued
                                        by IT and software development, thinking
                                        about it since 2016 up until 2023 when I
                                        finally decided to join Soy Henry in
                                        their Full Stack boot camp. I&apos;ve
                                        never felt more satisfied with my work
                                        since joining them.
                                        <br /> <br />
                                        I&apos;m fullstack but I have more of an
                                        affinity towards front-end development.
                                        I&apos;m currently working on a project
                                        with 6 others. Lets network and watch
                                        each other grow and flourish as
                                        developers!
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/CACornelio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/carlos-cornelio-0b44b6162/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                    <a
                                        id="Instagram"
                                        href="https://www.instagram.com/lucawolfp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 21 21"
                                            strokeWidth="1.5"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16.5 7.5l0 .01" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://i.imgur.com/S96s5db.png" />
                                </div>
                                <div className={style.Name}>
                                    <p>Joshua Candia</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Front-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                {/* Reemplaza el contenido con tu bio */}
                                <div className={style.bio}>
                                    <p>
                                        ¡Hola! Soy un desarrollador web con
                                        experiencia en el desarrollo de
                                        aplicaciones utilizando JavaScript (JS),
                                        tanto en el frontend como en el backend.
                                        <br />
                                        <br />
                                        Tengo conocimientos en tecnologías como
                                        React para el frontend, Express para el
                                        desarrollo de apis, Redux para la
                                        gestión del estado de la aplicación y
                                        Sequelize para trabajar con bases de
                                        datos relacionales. Siempre estoy en
                                        busca de nuevos desafíos y oportunidades
                                        para aprender y crecer en mi campo.
                                        Disfruto trabajar en equipo y compartir
                                        mis conocimientos con otros
                                        desarrolladores.
                                        <br />
                                        <br />
                                        Creo firmemente en la importancia de la
                                        comunicación clara y efectiva para
                                        lograr resultados exitosos en cualquier
                                        proyecto. Me apasiona comprender las
                                        necesidades de los clientes y crear
                                        soluciones elegantes y efectivas que las
                                        satisfagan. Estoy constantemente abierto
                                        a nuevas ideas y me esfuerzo por mejorar
                                        continuamente mis habilidades.
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/JoshuaCandia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/bonfiglipatricio-1209/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                    <a
                                        id="Instagram"
                                        href="https://www.instagram.com/candiajoshua_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 21 21"
                                            strokeWidth="1.5"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16.5 7.5l0 .01" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://i.imgur.com/3MwZD03.png" />
                                </div>
                                <div className={style.Name}>
                                    <p>Patricio Bonfigli</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Front-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                {/* Reemplaza el contenido con tu bio */}

                                <div className={style.bio}>
                                    <p>
                                        Estudiante Full Stack Web Developer en
                                        SoyHenry. Actualmente interesado en
                                        aprender y mejorar mis habilidades en
                                        Frontend, ya que me considero una
                                        persona artística y me atrae el lado
                                        visual de las cosas. <br/><br/>Sin embargo,
                                        también me fascina el manejo y la
                                        manipulación de datos que puede
                                        presentar el Backend.
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/BonPato98"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/bonfiglipatricio-1209/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>

                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://i.imgur.com/ZK2LE4a.png" />
                                </div>
                                <div className={style.Name}>
                                    <p>Adriel Diaz</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Back-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                <div className={style.bio}>
                                    <p>
                                        Un joven con muchas ganas de aprender,
                                        formar un equipo y ganar experiencia en
                                        el ambito del desarrollo web.
                                        Aprendiendo de forma autodidacta y con
                                        cursos busco desenvolverme cada vez con
                                        mas soltura en la programación.
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/DiazAdriel0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/adriel-n-diaz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://media.licdn.com/dms/image/D4D03AQHqV89liyFm5Q/profile-displayphoto-shrink_400_400/0/1689292250480?e=1696464000&v=beta&t=MDddJDbobF6U5O75F7UxF1_zf1Sco8SMxMsD-J1tMuA" />
                                </div>
                                <div className={style.Name}>
                                    <p>Francisco Junoy</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Back-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                <div className={style.bio}>
                                    <p>
                                        Soy un desarrollador web con experiencia
                                        en la creación de aplicaciones
                                        utilizando JavaScript (JS) en el
                                        frontend y el backend. <br />
                                        <br />
                                        Estoy familiarizado con tecnologías como
                                        React para el desarrollo del frontend,
                                        Express para la creación de APIs, Redux
                                        para la gestión del estado de la
                                        aplicación, PostgreSQL y MySQL para
                                        trabajar con bases de datos relacionales
                                        y CSS para agregar estilo. <br />
                                        <br />
                                        También tengo conocimientos básicos en
                                        Lenguaje C, Haskell y SAS, manejo
                                        aplicaciones de Office: Word, Excel,
                                        PowerPoint y Outlook y Prezi
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/franjunoy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/francisco-junoy-28a981225/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                    <a
                                        id="Instagram"
                                        href="https://www.instagram.com/lataikeada"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 21 21"
                                            strokeWidth="1.5"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16.5 7.5l0 .01" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={style.card}>
                        <center>
                            <div className={style.cardfront}>
                                <div className={style.profileimage}>
                                    <img src="https://i.imgur.com/31EqzWi.png" />
                                </div>
                                <div className={style.Name}>
                                    <p>Milagros Guzman</p>
                                </div>
                                <div className={style.socialbar}>
                                    <p>Back-End Developer</p>
                                </div>
                            </div>
                            <div className={style.cardback}>
                                <div className={style.bio}>
                                    <p>
                                        ¡Hola! Soy Milagros, una Fullstack
                                        developer en crecimiento. Desde siempre,
                                        he sentido una afinidad por las
                                        disciplinas prácticas, la ciencia, el
                                        arte y la tecnología, pero no fue hasta
                                        más tarde que incursioné en el mundo
                                        Tech.
                                        <br />
                                        <br /> Durante mi paso por la carrera de
                                        Tecnología Multimedia, tuve la
                                        oportunidad de explorar un poco la
                                        programación, y descubrí que me
                                        fascinaba el mundo tech y la resolución
                                        de problemas a través del desarrollo de
                                        software. <br />
                                        <br />
                                        Fue entonces cuando decidí tomar un
                                        nuevo camino y unirme al bootcamp de Soy
                                        Henry, donde adquirí conocimientos
                                        sólidos en tecnologías como Javascript,
                                        React, Redux, Express, Node.js,
                                        PostgreSQL y Sequelize. Mi viaje en la
                                        industria tech aún es joven, y eso me
                                        motiva aún más para seguir aprendiendo
                                        nuevas tecnologías de forma constante.
                                        Estoy lista para enfrentar nuevos
                                        desafíos y seguir creciendo como
                                        profesional en este apasionante campo.
                                        ¡No dudes en contactarme!
                                    </p>
                                </div>
                                <div className={style.socialbar}>
                                    <a
                                        id="github"
                                        href="https://github.com/Milagrosgzmn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="bi bi-github"
                                            fill="black"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        id="linkedIn"
                                        href="https://www.linkedin.com/in/milagros-guzman-abarca-369bbb250/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 22 20"
                                            strokeWidth="2"
                                            stroke="black"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {' '}
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />{' '}
                                            <rect
                                                x="4"
                                                y="4"
                                                width="16"
                                                height="16"
                                                rx="2"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="11"
                                                x2="8"
                                                y2="16"
                                            />{' '}
                                            <line
                                                x1="8"
                                                y1="8"
                                                x2="8"
                                                y2="8.01"
                                            />{' '}
                                            <line
                                                x1="12"
                                                y1="16"
                                                x2="12"
                                                y2="11"
                                            />{' '}
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutUs
