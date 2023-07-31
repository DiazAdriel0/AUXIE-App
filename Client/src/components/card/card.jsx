import style from './card.module.scss'

const Card = ({ user }) => {
    const { lastname, firstname, services, averageRating, completedWorks } =
        user
    console.log(user)
    return (
        <div className={style.card}>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{services}</p>
            <p>{averageRating}</p>
            <p>{completedWorks}</p>
        </div>
    )
}

export default Card
