import style from './filters.module.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import {
    filterAuxiesByService,
    orderAuxiesByPrice,
    orderAuxiesByRating,
} from '../../redux/Actions/actions'

const Filters = () => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services)
    const [priceOn, setpriceOn] = useState(false)
    const [orderPrice, setOrderPrice] = useState({
        value: 'off',
        label: 'Ordenar',
    })
    const [orderRating, setOrderRating] = useState({
        value: 'off',
        label: 'Ordenar',
    })

    const options = services.map((serv) => {
        return { value: serv.name, label: serv.name }
    })

    const order = [
        { value: 'off', label: 'Ordenar' },
        { value: 'asc', label: 'Menor a Mayor' },
        { value: 'desc', label: 'Mayor a Menor' },
    ]

    const filterByService = (input) => {
        const filterServices = input.map((i) => i.value)
        dispatch(filterAuxiesByService(filterServices))
        if (filterServices.length === 1) setpriceOn(true)
        else setpriceOn(false)
    }

    const orderByRating = (input) => {
        dispatch(orderAuxiesByRating(input.value))
        setOrderRating(input)
        if (orderPrice.value !== 'off')
            setOrderPrice({ value: 'off', label: 'Ordenar' })
    }

    const orderByPrice = (input) => {
        dispatch(orderAuxiesByPrice(input.value))
        setOrderPrice(input)
        if (orderRating.value !== 'off')
            setOrderRating({ value: 'off', label: 'Ordenar' })
    }

    return (
        <div className={style.contFilters}>
            <span>Filtrar por Servicios: </span>
            <Select
                placeholder="Elegir servicios"
                onChange={(input) => filterByService(input)}
                name="services"
                isMulti
                options={options}
            />
            {
                <>
                    <span>Ordenar por calificación: </span>
                    <Select
                        onChange={(input) => orderByRating(input)}
                        name="orderByRating"
                        options={order}
                        defaultValue={orderRating}
                        value={orderRating}
                    />
                </>
            }
            {priceOn && (
                <>
                    <span>Ordenar por Precio: </span>
                    <Select
                        onChange={(input) => orderByPrice(input)}
                        name="orderByPrice"
                        options={order}
                        defaultValue={orderPrice}
                        value={orderPrice}
                    />
                </>
            )}
        </div>
    )
}

export default Filters
