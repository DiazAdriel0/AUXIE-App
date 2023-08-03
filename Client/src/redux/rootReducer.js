import {
    GET_ALL_AUXIES,
    GET_AUXIE_DETAILS,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING,
    LOG_OR_REG_VIEW,
} from '../redux/Actions/actionTypes'

let initialState = {
    auxies: [],
    backupAuxies: [],
    filteredAuxies: [],
    services: [],
    details: {},
    filter: [],
    logOrRegView: false,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_AUXIES:
            return {
                ...state,
                auxies: action.payload,
                filteredAuxies: [...action.payload],
                backupAuxies: [...action.payload],
            }
        case GET_AUXIE_DETAILS:
            return { ...state, details: action.payload }

        case GET_ALL_SERVICES:
            return { ...state, services: action.payload }
        // filtra mi estado filteredAuxies dependiendo si el auxie tiene alguno de los servicios seleccionados
        case FILTER_AUXIES_BY_SERVICE:
            if (action.payload.length === 0) {
                return {
                    ...state,
                    filteredAuxies: [...state.auxies],
                    filter: action.payload,
                }
            } else {
                const filteredAuxies = action.payload.map((filter) =>
                    [...state.auxies].filter((aux) =>
                        aux.services.some(
                            (serv) =>
                                serv.name.toUpperCase() ===
                                filter.toUpperCase()
                        )
                    )
                )
                const allFiltered = new Set(filteredAuxies.flat(1))
                return {
                    ...state,
                    filter: action.payload,
                    filteredAuxies: [...allFiltered],
                }
            }
        // ordena el estado filteredAuxies por precio del servicio (solo se puede ordenar si todos los auxies de mi estado tienen un servicio en común)
        case ORDER_AUXIES_BY_PRICE:
            if (state.filter.length === 1) {
                let serviceFiltered = state.filter.toString()
                if (action.payload === 'asc') {
                    let ascFilter = [...state.filteredAuxies].sort(
                        (prev, next) =>
                            prev.services.find(
                                (obj) =>
                                    obj.name.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price -
                            next.services.find(
                                (obj) =>
                                    obj.name.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price
                    )
                    return { ...state, filteredAuxies: [...ascFilter] }
                } else {
                    let descFilter = [...state.filteredAuxies].sort(
                        (prev, next) =>
                            next.services.find(
                                (obj) =>
                                    obj.name.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price -
                            prev.services.find(
                                (obj) =>
                                    obj.name.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price
                    )
                    return { ...state, filteredAuxies: [...descFilter] }
                }
            } else {
                return { ...state }
            }
        //ordena el estado filteredAuxies por calificación independientemente del filtrado
        case ORDER_AUXIES_BY_RATING:
            if (action.payload === 'asc') {
                let ascFilter = [...state.filteredAuxies].sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return 1
                    if (prev.averageRating < next.averageRating) return -1
                    return 0
                })
                let ascAuxies = [...state.auxies].sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return 1
                    if (prev.averageRating < next.averageRating) return -1
                    return 0
                })
                return { ...state, filteredAuxies: [...ascFilter], auxies: [...ascAuxies] }
            } else if (action.payload === 'desc') {
                let descFilter = [...state.filteredAuxies].sort(
                    (prev, next) => {
                        if (prev.averageRating > next.averageRating) return -1
                        if (prev.averageRating < next.averageRating) return 1
                        return 0
                    }
                )
                let ascAuxies = [...state.auxies].sort(
                    (prev, next) => {
                        if (prev.averageRating > next.averageRating) return -1
                        if (prev.averageRating < next.averageRating) return 1
                        return 0
                    }
                )
                return { ...state, filteredAuxies: [...descFilter], auxies: [...ascAuxies] }
            } else {
                return { ...state }
            }

        case LOG_OR_REG_VIEW:
            return { ...state, logOrRegView: action.payload }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
