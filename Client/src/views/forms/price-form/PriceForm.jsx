import { useSelector } from 'react-redux'
import style from './priceForm.module.scss'
import { useEffect, useState } from 'react'

/* 
status(pin):"done"

paymentMethod(pin):"efectivo" */

const PriceForm = ({ id }) => {
    const loggedUser = useSelector((state) => state.loggedUser)
    const serviceFound = loggedUser.jobs.find((job) => job.id === id)
    const [service, setService] = useState(serviceFound)

    useEffect(() => {
        console.log(service)
    }, [service])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setService({
            ...service,
            [name]: value,
        })
    }

    const handleSelectChange = (event) => {
        const { value } = event.target
        setService({
            ...service,
            status: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //Ejecutar ruta que modifica precio y estado de jobs (cliente y auxie)
    }

    return (
        <form className={style.priceFormDiv} onSubmit={handleSubmit}>
            <p>Servicio: {service.service}</p>
            <p>Descripción: {service.description}</p>
            <p>Cliente: {service.clientName}</p>
            <p>
                Pago:
                {service.paymentMethod === 'app'
                    ? 'A través de nuestra app'
                    : 'Efectivo en persona'}
            </p>
            <p>Fecha: {service.jobDate}</p>

            <label>Precio final</label>
            <input
                type="number"
                name="price"
                value={service.price}
                onChange={handleInputChange}
            ></input>

            <label>Estado</label>
            <select
                type="text"
                value={service.status}
                name="status"
                onChange={handleSelectChange}
            >
                <option defaultValue disabled>
                    Estado
                </option>
                <option value="pending">Revisar</option>
                <option value="approved">Aprobar presupuesto</option>
                <option value="cancelled">Cancelar</option>
                <option value="done">Terminado</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default PriceForm
