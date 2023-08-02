import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import {
    getAllServices,
    filterAuxiesByService,
    orderAuxiesByPrice,
    orderAuxiesByRating,
} from '../../redux/Actions/actions'

const Filters = () => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services)
    const [priceOn, setpriceOn] = useState(false)

    const options = services.map((serv) => {
        return { value: serv.name, label: serv.name }
    })

    const filterByService = (input) => {
        dispatch(filterAuxiesByService(input.map(i => i.value)))
        if (input.length === 1) setpriceOn(true)
        else setpriceOn(false)
    }

    const orderByPrice = (e) => {
        dispatch(orderAuxiesByPrice(e.target.value))
    }
    const orderByRating = (e) => {
        dispatch(orderAuxiesByRating(e.target.value))
    }

    useEffect(() => {
        dispatch(getAllServices())
    }, [])
    return (
        <div>
            <span>Filtrar por Servicio: </span>
            <Select
                onChange={(input) => filterByService(input)}
                name="services"
                isMulti
                options={options}
            />
            {priceOn && (
                <>
                    <span>Ordenar por precio: </span>
                    <select onChange={orderByPrice} name="orderByPrice">
                        <option value="off">Ordenar por precio</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </>
            )}
            {(
                <>
                    <span>Ordenar por calificación: </span>
                    <select onChange={orderByRating} name="orderByRating">
                        <option value="off">Orden</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </>
            )}
        </div>
    )
}

export default Filters
