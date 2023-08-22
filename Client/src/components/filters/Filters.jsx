import style from './filters.module.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import {
    filterAuxiesByService,
    orderAuxiesByPrice,
    orderAuxiesByRating,
    switchFavorites,
} from '../../redux/actions/actions'

const Filters = () => {
    const dispatch = useDispatch()
    const services = useSelector(state => state.services)
    const nightMode = useSelector(state => state.nightMode)
    const [priceOn, setpriceOn] = useState(false)
    const [orderPrice, setOrderPrice] = useState({
        value: 'off',
        label: 'Ordenar',
    })
    const [orderRating, setOrderRating] = useState({
        value: 'off',
        label: 'Ordenar',
    })
    const [favSwitch, setFavSwitch] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState(null)

    const handleSwitch = () => {
        if (favSwitch) {
            setFavSwitch(false)
            dispatch(switchFavorites(false))
        }
        if (!favSwitch) {
            setFavSwitch(true)
            dispatch(switchFavorites(true))
        }
    }

    const off = { value: 'off', label: 'Filtrar' }

    const options = services.map(serv => {
        return { value: serv.name, label: serv.name }
    })

    options.unshift(off)

    const order = [
        { value: 'off', label: 'Ordenar' },
        { value: 'asc', label: 'Menor a Mayor' },
        { value: 'desc', label: 'Mayor a Menor' },
    ]

    const filterByService = input => {
        const filterService = input.value
        setSelectedFilter(input)
        dispatch(filterAuxiesByService(filterService))
        if (filterService === 'off') setpriceOn(false)
        else setpriceOn(true)
    }

    const orderByRating = input => {
        dispatch(orderAuxiesByRating(input.value))
        setOrderRating(input)
        if (orderPrice.value !== 'off') setOrderPrice({ value: 'off', label: 'Ordenar' })
    }

    const orderByPrice = input => {
        dispatch(orderAuxiesByPrice(input.value))
        setOrderPrice(input)
        if (orderRating.value !== 'off') setOrderRating({ value: 'off', label: 'Ordenar' })
    }

    const handleClick = () => {
        dispatch(filterAuxiesByService('off'))
        setSelectedFilter(null)
        setpriceOn(false)
        setOrderPrice({ value: 'off', label: 'Ordenar' })
        setOrderRating({ value: 'off', label: 'Ordenar' })
    }

    const nightStyles = {
        control: styles => ({ ...styles, backgroundColor: '#fafafa', cursor: 'pointer' }),
        option: (styles, { isFocused }) => {
            if (nightMode) {
                return {
                    ...styles,
                    backgroundColor: isFocused ? '#30598c' : '#fafafa',
                    color: isFocused ? '#FFF' : '#000',
                    cursor: 'pointer',
                }
            } else {
                return {
                    ...styles,
                    backgroundColor: isFocused ? '#30598c' : '#fafafa',
                    color: isFocused ? '#FFF' : '#000',
                    cursor: 'pointer',
                }
            }
        },
    }

    return (
        <div className={style.contFilters}>
            <span>Filtrar por Servicios: </span>
            <Select
                placeholder='Elegir servicios'
                onChange={input => filterByService(input)}
                name='services'
                value={selectedFilter}
                options={options}
                styles={nightStyles}
            />
            {
                <>
                    <span>Ordenar por calificación: </span>
                    <Select
                        onChange={input => orderByRating(input)}
                        name='orderByRating'
                        options={order}
                        defaultValue={orderRating}
                        value={orderRating}
                        styles={nightStyles}
                    />
                </>
            }
            {priceOn && (
                <>
                    <span>Ordenar por Precio: </span>
                    <Select
                        onChange={input => orderByPrice(input)}
                        name='orderByPrice'
                        options={order}
                        defaultValue={orderPrice}
                        value={orderPrice}
                        styles={nightStyles}
                    />
                </>
            )}
            <FormControlLabel control={<Switch onClick={handleSwitch} />} label='Favoritos' labelPlacement='start' />
            <button onClick={handleClick}>Limpiar filtros</button>
        </div>
    )
}

export default Filters
