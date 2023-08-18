import style from './tableServices.module.scss'
import usePagination from '../../pagination/usePagination'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import PriceForm from '../../../views/forms/price-form/PriceForm'
import { setServiceStatus } from '../../../redux/actions/actions'
import useNotify from '../../../hooks/useNotify'

const TableServices = () => {
    const dispatch = useDispatch()
    const [consumerUid, setConsumerUid] = useState(null)
    const [aux, setAux] = useState(false)
    const [sent, setSent] = useState(false)
    const [message, setMessage] = useState({
        name: '',
        status: '',
    })

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

    const { sendNotification } = useNotify(consumerUid)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm, loggedUser])

    useEffect(() => {
        if (consumerUid !== null && sent) {
            sendNotification(
                `${loggedUser.firstName} ${loggedUser.lastName} ha ${message.status} el servicio de ${message.name} requerido.`
            )
            setSent(false)
        }
    }, [aux])

    const handleClick = (event) => {
        setServiceId(event.target.value)
        setShowForm(true)
        setShouldCloseForm(false)
        setTimeout(() => {
            setShouldCloseForm(true)
        }, 100)
    }

    const handleStatus = (e, service) => {
        let data = {
            providerId: loggedUser.id,
            status: e.target.value,
            id: service.id,
            consumerId: service.clientId,
        }

        // dispatch(setServiceStatus(data))
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
                                    <button
                                        style={{ backgroundColor: 'green' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setMessage({
                                                name: service.service,
                                                status: e.target.value,
                                            })
                                            setConsumerUid(service.clientUid)
                                            setAux(!aux)
                                            setSent(true)

                                            handleStatus(e, service)
                                        }}
                                        value='approved'
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        style={{ backgroundColor: 'red' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setMessage({
                                                name: service.service,
                                                status: e.target.value,
                                            })
                                            setConsumerUid(service.clientUid)
                                            setAux(!aux)
                                            setSent(true)
                                            handleStatus(e, service)
                                        }}
                                        value='declined'
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
