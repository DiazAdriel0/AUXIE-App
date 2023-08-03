import style from './cardServices.module.scss'

const CardServices = (services) => {
    const { name } = services

    return (
        <div className={style.cardServices}>
            <h3>{name}</h3>
            <img src="imagen del servicio" alt="imagen del servicio" />
        </div>
    )
}

export default CardServices
