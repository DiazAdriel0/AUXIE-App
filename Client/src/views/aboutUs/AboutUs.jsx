import style from './aboutUs.module.scss'

const AboutUs = () => {
    return (
        <div>
            <h1>Quienes Somos</h1>

            <div className={style.aboutboxes}>
                <div className={style.aboutbox}>
                    <p>
                        Somos un equipo multicultural de programadores full
                        stack que fundó Auxie en julio de 2023. Nuestra misión
                        es transformar la forma en que se accede y se contratan
                        servicios de mantenimiento del hogar.{' '}
                    </p>
                    <p>
                        Con pasión y dedicación, hemos creado una plataforma que
                        conecta de manera eficiente a proveedores de servicios
                        como jardineros, plomeros, electricistas, limpieza y
                        muchos más, con clientes que buscan calidad y
                        confiabilidad.
                    </p>
                </div>
                <div className={style.aboutbox}>
                    <p>
                        En Auxie, valoramos la excelencia y la satisfacción del
                        cliente por encima de todo. Nuestra comunidad de
                        profesionales altamente capacitados y certificados está
                        lista para abordar cualquier desafío que se presente en
                        tu hogar.
                    </p>
                    <p>
                        Únete a Auxie y descubre una manera simplificada y
                        eficiente de acceder a servicios de calidad. Permítenos
                        convertir tus proyectos en realidades y brindarte la
                        tranquilidad que mereces. ¡Bienvenido a la comunidad
                        Auxie!
                    </p>
                </div>
                <div className={style.aboutbox}>
                    <p>
                        Nuestra base en Latinoamérica es una fuente de orgullo y
                        fortaleza. La diversidad cultural y la riqueza de
                        conocimientos nos permiten aportar una perspectiva única
                        y enriquecedora a nuestra plataforma.{' '}
                    </p>
                    <p>
                        Estamos comprometidos a empoderar a nuestros proveedores
                        para que alcancen el éxito y, al mismo tiempo, ofrecer a
                        nuestros clientes una experiencia sin igual en el mundo
                        de los servicios de mantenimiento del hogar.
                    </p>
                </div>
            </div>
            {/* ///cards/// */}
            <div className={style.cardcontainer}>
            <div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Carlos Cornelio</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>
<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Joshua Candia</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>
<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Patricio Bonfigli</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>
<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Agustina Fernandez</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>

<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Adriel Diaz</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>
<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Francisco Junoy</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>
<div className={style.card}>
  <center>
    <div className={style.profileimage}>
      
    </div>
    <div className={style.Name}>
      <p>Milagros Guzman</p>
    </div>
    <div className={style.socialbar}>
      
    </div>
  </center>
</div>

            </div>
        </div>
    )
}

export default AboutUs
