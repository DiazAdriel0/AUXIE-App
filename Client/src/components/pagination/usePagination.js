import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/actions'

const usePagination = (num, data) => {
    const currentPage = useSelector((state) => state.currentPage)

    const dispatch = useDispatch()

    const cardsPerPage = num
    let currentPageData = []
    const totalPages = Math.ceil(data.length / cardsPerPage)

    const pages = Array.from(
        { length: totalPages },
        (ignored, index) => index + 1
    )

    const firstIndex = cardsPerPage * (currentPage - 1)
    const lastIndex = cardsPerPage * currentPage - 1

    if (data.length) {
        currentPageData = data?.slice(firstIndex, lastIndex + 1)
    }

    const handleClick = (event) => {
        const { value } = event.target
        dispatch(setCurrentPage(value))
    }

    const handleClickPrev = () => {
        dispatch(setCurrentPage(currentPage - 1))
    }

    const handleClickNext = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }

    return {
        currentPageData,
        pages,
        totalPages,
        handleClick,
        handleClickPrev,
        handleClickNext,
    }
}

export default usePagination
