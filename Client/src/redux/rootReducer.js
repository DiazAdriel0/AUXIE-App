import {
    GET_ALL_AUXIES,
    GET_AUXIE_DETAILS,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING,
} from '../redux/Actions/actionTypes'

let initialState = {
    auxies: [],
    backupAuxies: [],
    filteredAuxies: [],
    services: [],
    details: {},
    filter: 'off',
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

        case FILTER_AUXIES_BY_SERVICE:
            if (action.payload === 'off') {
                return {
                    ...state,
                    filteredAuxies: [...state.backupAuxies],
                    filter: action.payload,
                }
            }
            return {
                ...state,
                filter: action.payload,
                filteredAuxies: [...state.auxies].filter((aux) =>
                    aux.services.some(
                        (serv) =>
                            serv.service.toUpperCase() ===
                            action.payload.toUpperCase()
                    )
                ),
            }

        case ORDER_AUXIES_BY_PRICE:
            if (state.filter !== 'off') {
                let serviceFiltered = state.filter
                if (action.payload === 'asc') {
                    let ascFilter = [...state.filteredAuxies].sort(
                        (prev, next) =>
                            prev.services.find(
                                (obj) =>
                                    obj.service.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price -
                            next.services.find(
                                (obj) =>
                                    obj.service.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price
                    )
                    return { ...state, filteredAuxies: [...ascFilter] }
                } else {
                    let descFilter = [...state.filteredAuxies].sort(
                        (prev, next) =>
                        next.services.find(
                            (obj) =>
                                obj.service.toLowerCase() ===
                                serviceFiltered.toLowerCase()
                        ).price - prev.services.find(
                                (obj) =>
                                    obj.service.toLowerCase() ===
                                    serviceFiltered.toLowerCase()
                            ).price 
                    )
                    return { ...state, filteredAuxies: [...descFilter] }
                }
            } else {
                return { ...state }
            }
        case ORDER_AUXIES_BY_RATING:
            if (state.filter !== 'off') {
                if (action.payload === 'asc') {
                    let ascFilter = [...state.filteredAuxies].sort(
                        (prev, next) => {
                            if (prev.averageRating > next.averageRating)
                                return 1
                            if (prev.averageRating < next.averageRating)
                                return -1
                            return 0
                        }
                    )
                    return { ...state, filteredAuxies: [...ascFilter] }
                } else {
                    let descFilter = [...state.filteredAuxies].sort(
                        (prev, next) => {
                            if (prev.averageRating > next.averageRating)
                                return -1
                            if (prev.averageRating < next.averageRating)
                                return 1
                            return 0
                        }
                    )
                    return { ...state, filteredAuxies: [...descFilter] }
                }
            } else {
                return { ...state }
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
