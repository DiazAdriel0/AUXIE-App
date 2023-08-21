import style from './cards.module.scss'

//* Components
import Card from '../card/Card'
import usePagination from '../pagination/usePagination'
import Pagination from '../pagination/Pagination'

import { useSelector } from 'react-redux'

const Cards = () => {
    const users = useSelector((state) => state.filteredAuxies)
    const { currentPageData } = usePagination(12, users)

    return (
        <>
            <div className={style.cards}>
                {currentPageData &&
                    currentPageData.map((user) => (
                        <Card
                            key={user.id}
                            id={user.id}
                            googleId={user.googleId}
                            userUid={user.userUid}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            services={user.services}
                            averageRating={user.averageRating}
                            completedWorks={user.completedWorks}
                            image={user.image.secure_url}
                        />
                    ))}
            </div>
            <div className={style.pagination}>
                <Pagination num={12} data={users} />
            </div>
        </>
    )
}

export default Cards
