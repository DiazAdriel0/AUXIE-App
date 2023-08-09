import {
    GET_ALL_AUXIES,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING,
    MENU_OPEN,
    SET_CURRENT_PAGE,
    RESET_AUXIES_CATALOG,
    LOGED_USER,
    LOGOUT,
    SET_TOKEN,
    RESET_TOKEN,
} from './Actions/actionTypes'

let initialState = {
    auxies: [],
    backupAuxies: [],
    filteredAuxies: [],
    loggedUser: {},
    services: [],
    filter: [],
    menuLanding: false,
    currentPage: 1,
    nightMode: false,
    token: '',
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // obtengo todos los auxies de mi back y los guardo en 3 estados diferentes
        case GET_ALL_AUXIES:
            return {
                ...state,
                auxies: action.payload,
                filteredAuxies: [...action.payload],
                backupAuxies: [...action.payload],
            }
        // obtengo todos los servicios de mi back y los guardo en mi estado global
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
                        aux.services.some((serv) => serv.name === filter)
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
                                (obj) => obj.name === serviceFiltered
                            ).price -
                            next.services.find(
                                (obj) => obj.name === serviceFiltered
                            ).price
                    )
                    return { ...state, filteredAuxies: [...ascFilter] }
                } else {
                    let descFilter = [...state.filteredAuxies].sort(
                        (prev, next) =>
                            next.services.find(
                                (obj) => obj.name === serviceFiltered
                            ).price -
                            prev.services.find(
                                (obj) => obj.name === serviceFiltered
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
                return {
                    ...state,
                    filteredAuxies: [...ascFilter],
                    auxies: [...ascAuxies],
                }
            } else if (action.payload === 'desc') {
                let descFilter = [...state.filteredAuxies].sort(
                    (prev, next) => {
                        if (prev.averageRating > next.averageRating) return -1
                        if (prev.averageRating < next.averageRating) return 1
                        return 0
                    }
                )
                let ascAuxies = [...state.auxies].sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return -1
                    if (prev.averageRating < next.averageRating) return 1
                    return 0
                })
                return {
                    ...state,
                    filteredAuxies: [...descFilter],
                    auxies: [...ascAuxies],
                }
            } else {
                return { ...state }
            }
        // switch para verificar si el usuario se encuentra en la pantalla de logIn o Register
        case MENU_OPEN:
            return { ...state, menuLanding: action.payload }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }

        // resetea mis estados modificados por mi actions
        case RESET_AUXIES_CATALOG:
            return {
                ...state,
                auxies: [...state.backupAuxies],
                filteredAuxies: [...state.backupAuxies],
            }

        // carga la info del usuario loggueado a mi estado global
        case LOGED_USER:
            return {
                ...state,
                loggedUser: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                loggedUser: action.payload,
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        case RESET_TOKEN:
            return {
                ...state,
                token: '',
            }
        // caso por defecto si por alguna razón no recibe action.type
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
