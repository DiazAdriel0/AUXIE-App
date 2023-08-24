import style from './cardsJobs.module.scss'

import CardJobs from '../card-jobs/CardJobs'
import usePagination from '../../pagination/usePagination'
import { useSelector } from 'react-redux'
const CardsJobs = () => {
    const loggedUser = useSelector((state) => state.loggedUser)

    const { currentPageData } = usePagination(6, loggedUser.jobs)
    return (
        <div className={style.cardsJobs}>
            {currentPageData.map((data) => (
                <CardJobs key={data.id} data={data} />
            ))}
        </div>
    )
}

export default CardsJobs
