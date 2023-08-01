import style from './cardServices.module.scss'

const CardServices = (services) => {
    const { name } = services

    return (
        <div className={style.cardServices}>
            <h3>{name}</h3>
            <img src="Conseguime una img adri" alt="Conseguime una img adri" />
        </div>
    )
}

export default CardServices
