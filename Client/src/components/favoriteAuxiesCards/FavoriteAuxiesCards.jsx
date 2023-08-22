import style from './favoriteAuxiesCards.module.scss'

//* Components
import FavoriteAuxieCard from '../favoriteAuxieCard/FavoriteAuxieCard'

import { useSelector } from 'react-redux'

const FavoriteAuxiesCards = () => {
    const Favorites = useSelector(
        (state) => state.loggedUser.favoritesProviders
    )

    return (
        <>
            <div className={style.cards}>
                {Favorites?.length > 0 ? (
                    Favorites.map((user) => (
                        <FavoriteAuxieCard
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            services={user.services}
                            averageRating={user.averageRating}
                        />
                    ))
                ) : (
                    <p>No tienes favoritos</p>
                )}
            </div>
        </>
    )
}

export default FavoriteAuxiesCards
