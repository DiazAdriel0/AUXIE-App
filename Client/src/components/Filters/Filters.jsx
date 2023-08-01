import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { filterAuxiesByService, orderAuxiesByPrice } from '../../redux/Actions/actions'

const Filters = () => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services)
    const [selected, setSelected] = useState({
        filterByService: 'off',
        orderByPrice: 'off'
    })

    const filterByService = (e) => {
        dispatch(filterAuxiesByService(e.target.value))
        setSelected({
            ...selected,
            filterByService: e.target.value,
        })
    }

    const orderByPrice = (e) => {
        dispatch(orderAuxiesByPrice(e.target.value))
        setSelected({
            ...selected,
            orderByPrice: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getAllServices())
    }, [])
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
            <span>Ordenar por precio: </span>
            <select onChange={orderByPrice} 
            name="orderByPrice" 
            value={selected.orderByPrice}>
                <option value="off">Ordenar por precio</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    )
}

export default Filters
