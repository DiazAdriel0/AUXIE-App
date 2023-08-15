import style from './tableServices.module.scss'
import usePagination from '../../pagination/usePagination'
import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import PriceForm from '../../../views/forms/price-form/PriceForm'

const TableServices = () => {
    const targetRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [shouldCloseForm, setShouldCloseForm] = useState(false)
    const loggedUser = useSelector((state) => state.loggedUser)
    const { currentPageData } = usePagination(15, loggedUser.jobs)

    const handleClickOutside = (event) => {
        if (
            shouldCloseForm &&
            targetRef.current &&
            !targetRef.current.contains(event.target)
        ) {
            setShowForm(false)
            setShouldCloseForm(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm])

    useEffect(() => {
        console.log(showForm)
    }, [showForm])

    const handleClick = () => {
        setShowForm(true)
        setShouldCloseForm(false)
        setTimeout(() => {
            setShouldCloseForm(true)
        }, 100)
    }

    return (
        <div>
            {showForm && (
                <div className={style.priceFormContainer}>
                    <div className={style.priceForm} ref={targetRef}>
                        <PriceForm />
                    </div>
                </div>
            )}
            <table className={style.servicesTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Trabajos</th>
                        <th>Categoria</th>
                        <th>Estado</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((service) => (
                        <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.service}</td>
                            <td>{service.description}</td>
                            <td>{service.status}</td>
                            {service.status === 'pending' && (
                                <td>
                                    <button onClick={handleClick}>
                                        Propuesta
                                    </button>
                                </td>
                            )}
                            {service.status === 'done' && (
                                <td>{service.price}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableServices
