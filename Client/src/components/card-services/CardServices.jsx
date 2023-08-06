import style from './cardServices.module.scss'

const CardServices = (services) => {
    const { name, image } = services

    return (
        <div className={style.cardServices}>
            <img src={image} alt={`Imagen del servicio ${name}`} />
            <h3>{name}</h3>
        </div>
    )
}

export default CardServices
