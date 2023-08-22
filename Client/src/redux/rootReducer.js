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
    UPDATE_PROFILE,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    TURN_LIGHT_NIGHT_MODE,
    SET_STATUS,
    POST_CLAIM,
    GET_CLAIMS,
    UPDATE_CONSUMER,
    UPDATE_PROVIDER,
    FIRST_LOGIN,
    GET_ALL_CLIENTS,
    SWITCH_FAVORITES,
    GET_CLAIM_ID,
} from './actions/actionTypes'

let initialState = {
    clients: [],
    auxies: [],
    consumers: [],
    backupAuxies: [],
    backupConsumers: [],
    filteredAuxies: [],
    filteredConsumers: [],
    loggedUser: {},
    services: [],
    filter: '',
    menuLanding: false,
    currentPage: 1,
    nightMode: false,
    token: '',
    claims: [],
    id: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // obtengo todos los auxies de mi back y los guardo en 3 estados diferentes
        case GET_ALL_CLIENTS:
            return {
                ...state,
                clients: action.payload,
            }
        case GET_ALL_AUXIES:
            return {
                ...state,
                auxies: action.payload,
                filteredAuxies: [...action.payload],
                backupAuxies: [...action.payload],
            }

        case GET_CLAIMS:
            return {
                ...state,
                claims: [...action.payload],
            }

        case GET_CLAIM_ID:
            return {
                ...state,
                id: action.payload,
            }

        // obtengo todos los servicios de mi back y los guardo en mi estado global
        case GET_ALL_SERVICES:
            return { ...state, services: action.payload }
        // filtra mi estado filteredAuxies dependiendo si el auxie tiene alguno de los servicios seleccionados
        case FILTER_AUXIES_BY_SERVICE:
            if (action.payload === 'off') {
                return {
                    ...state,
                    filteredAuxies: [...state.backupAuxies],
                    filter: action.payload,
                }
            } else {
                const filteredAuxies = [...state.auxies].filter(aux =>
                    aux.services.some(serv => serv.name === action.payload)
                )
                return {
                    ...state,
                    filter: action.payload,
                    filteredAuxies: [...filteredAuxies],
                }
            }
        // ordena el estado filteredAuxies por precio del servicio (solo se puede ordenar si todos los auxies de mi estado tienen un servicio en común)
        case ORDER_AUXIES_BY_PRICE:
            if (action.payload === 'asc') {
                let ascFilter = [...state.filteredAuxies].sort(
                    (prev, next) =>
                        prev.services.find(obj => obj.name === state.filter).price -
                        next.services.find(obj => obj.name === state.filter).price
                )
                return { ...state, filteredAuxies: [...ascFilter] }
            } else if (action.payload === 'desc') {
                let descFilter = [...state.filteredAuxies].sort(
                    (prev, next) =>
                        next.services.find(obj => obj.name === state.filter).price -
                        prev.services.find(obj => obj.name === state.filter).price
                )
                return { ...state, filteredAuxies: [...descFilter] }
            } else {
                return { ...state, auxies: [...state.backupAuxies] }
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
                let descFilter = [...state.filteredAuxies].sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return -1
                    if (prev.averageRating < next.averageRating) return 1
                    return 0
                })
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
                return { ...state, auxies: [...state.backupAuxies] }
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
        case UPDATE_PROFILE:
            return {
                ...state,
                loggedUser: action.payload,
            }
        case ADD_FAVORITE:
            return {
                ...state,
                loggedUser: {
                    ...state.loggedUser,
                    favoritesProviders: [...state.loggedUser.favoritesProviders, action.payload],
                },
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                loggedUser: {
                    ...state.loggedUser,
                    favoritesProviders: [...action.payload],
                },
            }
        case TURN_LIGHT_NIGHT_MODE:
            return {
                ...state,
                nightMode: action.payload,
            }
        case SET_STATUS:
            return {
                ...state,
                loggedUser: {
                    ...state.loggedUser,
                    jobs: action.payload,
                },
            }

        case POST_CLAIM:
            return {
                ...state,
                loggedUser: {
                    ...state.loggedUser,
                    claims: [...initialState.claims, action.payload],
                },
            }

        case UPDATE_CONSUMER:
            return {
                ...state,
                loggedUser: action.payload,
            }
        case UPDATE_PROVIDER:
            return {
                ...state,
                loggedUser: action.payload,
            }
        case FIRST_LOGIN:
            return {
                ...state,
                loggedUser: {
                    ...initialState.loggedUser,
                    firstLogin: action.payload,
                },
            }
        case SWITCH_FAVORITES:
            if (action.payload) {
                const foundFavorite = [...state.loggedUser.favoritesProviders].map(aux => {
                    const favorite = [...state.backupAuxies].find(fav => fav.id === aux.id)
                    if (favorite) return favorite
                })
                return {
                    ...state,
                    filteredAuxies: foundFavorite,
                }
            } else {
                return {
                    ...state,
                    filteredAuxies: [...state.backupAuxies],
                }
            }
        // caso por defecto si por alguna razón no recibe action.type
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
