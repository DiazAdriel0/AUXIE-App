import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    filterAuxiesByService,
    orderAuxiesByPrice,
    orderAuxiesByRating,
} from '../../redux/Actions/actions'

const Filters = () => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services)
    const [selected, setSelected] = useState(false)

    const filterByService = (e) => {
        dispatch(filterAuxiesByService(e.target.value))
        if (e.target.value === 'off') setSelected(false)
        else setSelected(true)
    }

    const orderByPrice = (e) => {
        dispatch(orderAuxiesByPrice(e.target.value))
    }
    const orderByRating = (e) => {
        dispatch(orderAuxiesByRating(e.target.value))
    }

    return (
        <div>
            <span>Filtrar por Servicio: </span>
            <select
                onChange={filterByService}
                name="services"
                value={selected.filterByService}
            >
                <option value="off">Elegir Servicio</option>
                {services &&
                    services.map((serv) => (
                        <option value={serv.name} key={serv.name}>
                            {serv.name}
                        </option>
                    ))}
            </select>
            {selected && (
                <>
                    <span>Ordenar por precio: </span>
                    <select onChange={orderByPrice} name="orderByPrice">
                        <option value="off">Ordenar por precio</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </>
            )}
            {selected && (
                <>
                    <span>Ordenar por calificación: </span>
                    <select onChange={orderByRating} name="orderByRating">
                        <option value="off">Ordenar por calificación</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </>
            )}
        </div>
    )
}

export default Filters
