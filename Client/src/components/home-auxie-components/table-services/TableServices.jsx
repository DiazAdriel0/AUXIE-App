import style from './tableServices.module.scss'
import usePagination from '../../pagination/usePagination'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import PriceForm from '../../../views/forms/price-form/PriceForm'
import {setServiceStatus} from '../../../redux/actions/actions'

const TableServices = () => {
    const dispatch = useDispatch()

    const targetRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [shouldCloseForm, setShouldCloseForm] = useState(false)
    const [serviceId, setServiceId] = useState('')
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
            setServiceId('')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm, loggedUser])

    const handleClick = (event) => {
        setServiceId(event.target.value)
        setShowForm(true)
        setShouldCloseForm(false)
        setTimeout(() => {
            setShouldCloseForm(true)
        }, 100)
    }

    const handleStatus= (e,id, clientId )=>{
        let data ={
            providerId: loggedUser.id,
            status: e.target.value,
            id: id,
            consumerId: clientId,
        }
        dispatch(setServiceStatus(data))
    }

    return (
        <div>
            {showForm && (
                <div className={style.priceFormContainer}>
                    <div className={style.priceForm} ref={targetRef}>
                        <PriceForm id={serviceId} />
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
                                    <button
                                        onClick={handleClick}
                                        value={service.id}
                                    >
                                        Propuesta
                                    </button>
                                    <button style={{backgroundColor:'green'}}
                                        onClick={(e)=>{handleStatus(e,service.id, service.clientId)}}
                                        value='aceptado'
                                    >
                                        Aceptar
                                    </button>
                                    <button style={{backgroundColor:'red'}}
                                        onClick={(e)=>{handleStatus(e,service.id, service.clientId)}}
                                        value='rechazado'
                                    >
                                        Rechazar
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
