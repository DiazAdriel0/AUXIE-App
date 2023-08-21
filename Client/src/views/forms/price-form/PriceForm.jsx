import { useSelector, useDispatch } from 'react-redux'
import style from './priceForm.module.scss'
import { useState } from 'react'
import axios from 'axios'
import useNotify from '../../../hooks/useNotify'
import { setServiceStatus } from '../../../redux/actions/actions'
import Swal from 'sweetalert2'

const PriceForm = ({ id }) => {
    const loggedUser = useSelector(state => state.loggedUser)
    const serviceFound = loggedUser.jobs.find(job => job.id === id)
    const [service, setService] = useState(serviceFound)
    const dispatch = useDispatch()

    const { sendNotification } = useNotify(service.clientUid)

    const handleInputChange = event => {
        const { name, value } = event.target
        setService({
            ...service,
            [name]: value,
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await axios.put('/providers/jobPriceUpdate', {
                id: service.id,
                consumerId: service.clientId,
                providerId: loggedUser.id,
                price: service.price,
            })
            dispatch(
                setServiceStatus({
                    id: service.id,
                    consumerId: service.clientId,
                    providerId: loggedUser.id,
                    status: 'proposal',

                })
            )
            sendNotification(
                `El auxie ${loggedUser.firstName} ${loggedUser.lastName} ha enviado la propuesta a tu solicitud. Revisala para confirmar posibles cambios`
            )
            
            Swal.fire('Cambios realizados con exito')
        } catch (error) {
            console.error(error)
            Swal.fire('No se han guardado los cambios')
        }
    }

    return (
        <form className={style.priceFormDiv} onSubmit={handleSubmit}>
            <p>Servicio: {service?.service}</p>
            <p>Descripción: {service?.description}</p>
            <p>Cliente: {service?.clientName}</p>
            <p>
                Pago:
                {service?.paymentMethod === 'app' ? 'A través de nuestra app' : 'Efectivo en persona'}
            </p>
            <p>Fecha: {service?.jobDate}</p>

            <label>Precio final</label>
            <input type='number' name='price' value={service?.price} onChange={handleInputChange}></input>

            <button type='submit'>Enviar propuesta</button>
        </form>
    )
}

export default PriceForm
