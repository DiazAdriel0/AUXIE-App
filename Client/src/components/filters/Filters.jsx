import style from './filters.module.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import {
    filterAuxiesByService,
    orderAuxiesByPrice,
    orderAuxiesByRating,
} from '../../redux/actions/actions'

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

    const off = { value: 'off', label: 'Filtrar' }

    const options = services.map((serv) => {
        return { value: serv.name, label: serv.name }
    })

    options.unshift(off)

    const order = [
        { value: 'off', label: 'Ordenar' },
        { value: 'asc', label: 'Menor a Mayor' },
        { value: 'desc', label: 'Mayor a Menor' },
    ]

    const filterByService = (input) => {
        const filterService = input.value
        dispatch(filterAuxiesByService(filterService))
        if (filterService === 'off') setpriceOn(false)
        else setpriceOn(true)
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
                className={style.filtersSelectCont}
                classNamePrefix={style.filtersSelect}
                placeholder='Elegir servicios'
                onChange={(input) => filterByService(input)}
                name='services'
                defaultValue={off}
                options={options}
            />
            {
                <>
                    <span>Ordenar por calificación: </span>
                    <Select
                        onChange={(input) => orderByRating(input)}
                        name='orderByRating'
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
                        name='orderByPrice'
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
