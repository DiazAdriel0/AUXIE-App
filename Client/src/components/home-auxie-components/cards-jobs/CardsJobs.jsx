import style from './cardsJobs.module.scss'
import data from '../../../API/data'
import CardJobs from '../card-jobs/CardJobs'
import usePagination from '../../pagination/usePagination'
const CardsJobs = () => {
    const { currentPageData } = usePagination(8, data)
    return (
        <div className={style.cardsJobs}>
            {currentPageData.map((data) => (
                <CardJobs key={data.id} data={data} />
            ))}
        </div>
    )
}

export default CardsJobs
