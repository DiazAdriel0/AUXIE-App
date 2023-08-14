import style from './cardServices.module.scss'
import { useSelector } from 'react-redux'
const CardServices = (services) => {
    const { cardServices, cardServicesNight, cardHeader, cardImg, cardBody } =
        style
    const { name, image } = services
    const nightMode = useSelector((state) => state.nightMode)

    return (
        <article className={!nightMode ? cardServices : cardServicesNight}>
            <header id={image} className={cardHeader}>
                <img className={cardImg} src={image} alt="" />
            </header>
            <div className={cardBody}>
                <h4>{name}</h4>
            </div>
        </article>
    )
}

export default CardServices
