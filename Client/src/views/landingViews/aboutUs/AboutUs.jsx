import { useSelector } from 'react-redux'

import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './aboutUs.module.scss'
import NavLanding from '../../../components/nav-landing/NavLanding'
import Footer from '../../../components/footer/Footer.jsx'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import handyman from '../../../assets/handyman.png'
import csatisfaction from '../../../assets/customerSatisfaction.png'
import latam from '../../../assets/Map-of-Latin-America-5.png'

const AboutUs = () => {
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)

    const isLogged = Object.keys(user).length > 0

    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <main className={!menuLanding ? style.main : style.mainHide}></main>
            <div className={style.about}>
                <h2>Todo sobre Auxie</h2>
            </div>

            <section className={style.aboutboxes}>
                <div className={style.card}>
                    <div className={style.cardfront}>
                        <center>
                            <h2>¿Qué es Auxie?</h2>
                        </center>

                        <p>
                            Con pasión y dedicación, hemos creado una plataforma
                            que conecta de manera eficiente a proveedores de
                            servicios como jardineros, plomeros, electricistas,
                            limpieza y muchos más, con clientes que buscan
                            calidad y confiabilidad.
                        </p>

                        <p>
                            Únete a Auxie y descubre una manera simplificada y
                            eficiente de acceder a servicios de calidad.
                            Permítenos convertir tus proyectos en realidades y
                            brindarte la tranquilidad que mereces. ¡Bienvenido a
                            la comunidad Auxie!
                        </p>
                    </div>
                    <div className={style.cardback}>
                        {/* Reemplaza el contenido con tu bio */}
                        <div className={style.imageabout2}>
                            <img
                                src={handyman}
                                alt='Imagen'
                            />
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.cardfront}>
                        <center>
                            <h2>¿Por qué usar auxie?</h2>
                        </center>
                        <p>
                            En Auxie, valoramos la excelencia y la satisfacción
                            del cliente por encima de todo. Nuestra comunidad de
                            profesionales altamente capacitados y certificados
                            está lista para abordar cualquier desafío que se
                            presente en tu hogar.
                        </p>
                        <p>
                            Estamos comprometidos a empoderar a nuestros
                            proveedores para que alcancen el éxito y, al mismo
                            tiempo, ofrecer a nuestros clientes una experiencia
                            sin igual en el mundo de los servicios de
                            mantenimiento del hogar.
                        </p>
                    </div>
                    <div className={style.cardback}>
                        <div className={style.imageabout2}>
                            <img
                                src={csatisfaction}
                                alt='Imagen'
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
                            riqueza de conocimientos nos permiten aportar una
                            perspectiva única y enriquecedora a nuestra
                            plataforma.{' '}
                        </p>
                        <p>
                            Somos un equipo multicultural de programadores full
                            stack que fundó Auxie en julio de 2023. Nuestra
                            misión es transformar la forma en que se accede y se
                            contratan servicios de mantenimiento del hogar.{' '}
                        </p>
                    </div>
                    <div className={style.cardback}>
                        {/* Reemplaza el contenido con tu bio */}
                        <img
                            src={latam}
                            alt='Imagen'
                        />
                    </div>
                </div>
            </section>
            {/* cards de about */}
            {/* ///cards/// */}
            <center>
                <div className={style.about2}>
                    <h2>¡Conocé al equipo Auxie!</h2>{' '}
                </div>
            </center>

            <div className={style.cardcontainer}>
                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src=' https://i.imgur.com/7mvXvFv.png' />
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
                                <div className={style.bio2}>
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
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/AgustinaFernandez01'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/agustina-fern%C3%A1ndez-138b67272/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>

                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://media.licdn.com/dms/image/D4E03AQHcMdx0oFKtoA/profile-displayphoto-shrink_400_400/0/1690407183115?e=1696464000&v=beta&t=RQ4KpJ48pmfPcjFj-O5HkKLU3HYJOhiIyDtMLQOgZXI'></img>
                            </div>
                            <div className={style.Name}>
                                <p>Carlos Cornelio</p>
                            </div>
                            <div className={style.socialbar}>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                        <div className={style.cardback}>
                            <div className={style.bio}>
                                <div className={style.bio2}>
                                    <p>
                                        Hello! My name is Carlos! I&apos;m
                                        originally a Biochemical Engineer with a
                                        specialization in Food Science.
                                        I&apos;ve always been intrigued by IT
                                        and software development, thinking about
                                        it since 2016 up until 2023 when I
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
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/CACornelio'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/carlos-cornelio-0b44b6162/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='Instagram'
                                    href='https://www.instagram.com/lucawolfp/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Instagram style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://i.imgur.com/S96s5db.png' />
                            </div>
                            <div className={style.Name}>
                                <p>Joshua Candia</p>
                            </div>
                            <div className={style.socialbar}>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                        <div className={style.cardback}>
                            <div className={style.bio}>
                                <div className={style.bio2}>
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
                            </div>

                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/JoshuaCandia'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/bonfiglipatricio-1209/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='Instagram'
                                    href='https://www.instagram.com/candiajoshua_/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Instagram style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://i.imgur.com/3MwZD03.png' />
                            </div>
                            <div className={style.Name}>
                                <p>Patricio Bonfigli</p>
                            </div>
                            <div className={style.socialbar}>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                        <div className={style.cardback}>


                            <div className={style.bio}>
                                <div className={style.bio2}>
                                    <p>
                                        Estudiante Full Stack Web Developer en
                                        SoyHenry. Actualmente interesado en
                                        aprender y mejorar mis habilidades en
                                        Frontend, ya que me considero una
                                        persona artística y me atrae el lado
                                        visual de las cosas. <br />
                                        <br />
                                        Sin embargo, también me fascina el
                                        manejo y la manipulación de datos que
                                        puede presentar el Backend.
                                    </p>
                                </div>
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/BonPato98'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/bonfiglipatricio-1209/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>

                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://i.imgur.com/ZK2LE4a.png' />
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
                                <div className={style.bio2}>
                                    <p>
                                        Un joven con muchas ganas de aprender,
                                        formar un equipo y ganar experiencia en
                                        el ambito del desarrollo web.
                                        Aprendiendo de forma autodidacta y con
                                        cursos busco desenvolverme cada vez con
                                        mas soltura en la programación.
                                    </p>
                                </div>
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/DiazAdriel0'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/adriel-n-diaz/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://media.licdn.com/dms/image/D4D03AQHqV89liyFm5Q/profile-displayphoto-shrink_400_400/0/1689292250480?e=1696464000&v=beta&t=MDddJDbobF6U5O75F7UxF1_zf1Sco8SMxMsD-J1tMuA' />
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
                                <div className={style.bio2}>
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
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/franjunoy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                    
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/francisco-junoy-28a981225/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                                <a
                                    id='Instagram'
                                    href='https://www.instagram.com/lataikeada'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Instagram style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
                <div className={style.card}>
                    <center>
                        <div className={style.cardfront}>
                            <div className={style.profileimage}>
                                <img src='https://i.imgur.com/31EqzWi.png' />
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
                                <div className={style.bio2}>
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
                            </div>
                            <div className={style.socialbar}>
                                <a
                                    id='github'
                                    href='https://github.com/Milagrosgzmn'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHub style={{ fill: 'black' }} />
                                  
                                </a>
                                <a
                                    id='linkedIn'
                                    href='https://www.linkedin.com/in/milagros-guzman-abarca-369bbb250/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkedIn style={{ fill: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
