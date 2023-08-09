import style from './pagination.module.scss'
import { useSelector } from 'react-redux'
import usePagination from './usePagination'

const Pagination = ({ num, data }) => {
    const currentPage = useSelector((state) => state.currentPage)
    const pagination = usePagination(num, data)

    return (
        <div className={style.containerPagination}>
            <button
                disabled={currentPage === 1}
                className={
                    currentPage === 1 ? style.disabled : style.prevNextButtons
                }
                onClick={pagination.handleClickPrev}
            >
                Prev
            </button>

            {pagination.pages.map((page) => (
                <button
                    key={page}
                    onClick={pagination.handleClick}
                    value={page}
                    className={
                        currentPage === page
                            ? style.currentPage
                            : style.pageButton
                    }
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === pagination.totalPages}
                className={
                    currentPage === pagination.totalPages
                        ? style.disabled
                        : style.prevNextButtons
                }
                onClick={pagination.handleClickNext}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
