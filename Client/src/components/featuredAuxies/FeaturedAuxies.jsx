// import { shuffle } from '../../utils/shuffle'
import { useSelector } from 'react-redux'
import style from './featuredAuxies.module.scss'
import FeaturedCard from './featuredCard/FeaturedCard'

const FeaturedAuxies = () => {
    const auxies = useSelector((state) => state.backupAuxies)

    const auxiesToShuffle = auxies
        ? auxies.filter((aux) => aux.averageRating > 2.5)
        : null
    // const shuffledAuxies = shuffle(auxiesToShuffle)
    const topAuxies = auxiesToShuffle.splice(0, 3)
    return (
        <div className={style.featuredAuxies}>
            {topAuxies &&
                topAuxies.map((aux) => (
                    <FeaturedCard
                        key={aux.id}
                        id={aux.id}
                        firstName={aux.firstName}
                        lastName={aux.lastName}
                        services={aux.services}
                        averageRating={aux.averageRating}
                        image={aux.image.secure_url}
                    />
                ))}
        </div>
    )
}

export default FeaturedAuxies
