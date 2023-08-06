import style from './cardServices.module.scss'

const CardServices = (services) => {
    const { name, image } = services

    return (
        <div className={style.cardServices}>
            <h3>{name}</h3>
            <img src={image} alt={`Imagen del servicio ${name}`} />
            <p>Ir al servicio</p>
        </div>
    )
}

export default CardServices
