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
    consumers: [],
    backupAuxies: [],
    backupConsumers: [],
    auxies: [],
    filteredAuxies: [],
    favoriteAuxies: [],
    backupFavorites: [],
    shownAuxies: [],
    filteredConsumers: [],
    loggedUser: {},
    services: [],
    filter: 'off',
    showFavorites: false,
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
                shownAuxies: [...action.payload],
                backupAuxies: [...action.payload],
                filteredAuxies: [...action.payload],
                favoriteAuxies: [...action.payload],
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
                if (state.showFavorites) {
                    return {
                        ...state,
                        filter: action.payload,
                        shownAuxies: [...state.favoriteAuxies],
                    }
                }
                return {
                    ...state,
                    filter: action.payload,
                    shownAuxies: [...state.auxies],
                }
            } else {
                if (state.showFavorites) {
                    const favBackup = [...state.backupFavorites].filter(aux =>
                        aux.services.some(serv => serv.name === action.payload)
                    )
                    const filteredAuxies = [...state.auxies].filter(aux =>
                        aux.services.some(serv => serv.name === action.payload)
                    )
                    return {
                        ...state,
                        filter: action.payload,
                        filteredAuxies: [...filteredAuxies],
                        favoriteAuxies: [...favBackup],
                        shownAuxies: [...favBackup],
                    }
                }
                const filteredAuxies = [...state.auxies].filter(aux =>
                    aux.services.some(serv => serv.name === action.payload)
                )
                return {
                    ...state,
                    filter: action.payload,
                    filteredAuxies: [...filteredAuxies],
                    shownAuxies: [...filteredAuxies],
                }
            }
        case SWITCH_FAVORITES:
            if (action.payload) {
                if (state.filter !== 'off') {
                    const filteredfavorites = [...state.filteredAuxies].filter(aux =>
                        [...state.loggedUser.favoritesProviders].find(fav => fav.id === aux.id)
                    )
                    return {
                        ...state,
                        showFavorites: true,
                        favoriteAuxies: [...filteredfavorites],
                        shownAuxies: [...filteredfavorites],
                    }
                }
                const filteredfavorites = [...state.auxies].filter(aux =>
                    [...state.loggedUser.favoritesProviders].find(fav => fav.id === aux.id)
                )
                return {
                    ...state,
                    showFavorites: true,
                    favoriteAuxies: [...filteredfavorites],
                    backupFavorites: [...filteredfavorites],
                    shownAuxies: [...filteredfavorites],
                }
            } else {
                if (state.filter !== 'off') {
                    return {
                        ...state,
                        showFavorites: false,
                        shownAuxies: [...state.filteredAuxies],
                    }
                }
                return {
                    ...state,
                    showFavorites: false,
                    shownAuxies: [...state.favoriteAuxies],
                }
            }
        // ordena el estado filteredAuxies por precio del servicio (solo se puede ordenar si todos los auxies de mi estado tienen un servicio en común)
        case ORDER_AUXIES_BY_PRICE:
            if (action.payload === 'asc') {
                state.filteredAuxies.sort(
                    (prev, next) =>
                        prev.services.find(obj => obj.name === state.filter).price -
                        next.services.find(obj => obj.name === state.filter).price
                )
                if (state.showFavorites && state.filter !== 'off') {
                    state.favoriteAuxies.sort(
                        (prev, next) =>
                            prev.services.find(obj => obj.name === state.filter).price -
                            next.services.find(obj => obj.name === state.filter).price
                    )
                    return { ...state, shownAuxies: [...state.favoriteAuxies] }
                }
                return { ...state, shownAuxies: [...state.filteredAuxies] }
            } else {
                state.filteredAuxies.sort(
                    (prev, next) =>
                        next.services.find(obj => obj.name === state.filter).price -
                        prev.services.find(obj => obj.name === state.filter).price
                )
                if (state.showFavorites && state.filter !== 'off') {
                    state.favoriteAuxies.sort(
                        (prev, next) =>
                            next.services.find(obj => obj.name === state.filter).price -
                            prev.services.find(obj => obj.name === state.filter).price
                    )
                    return { ...state, shownAuxies: [...state.favoriteAuxies] }
                }
                return { ...state, shownAuxies: [...state.filteredAuxies] }
            }
        //ordena el estado filteredAuxies por calificación independientemente del filtrado
        case ORDER_AUXIES_BY_RATING:
            if (action.payload === 'asc') {
                state.filteredAuxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return 1
                    if (prev.averageRating < next.averageRating) return -1
                    return 0
                })
                state.auxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return 1
                    if (prev.averageRating < next.averageRating) return -1
                    return 0
                })
                state.favoriteAuxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return 1
                    if (prev.averageRating < next.averageRating) return -1
                    return 0
                })
                if (state.showFavorites) return { ...state, shownAuxies: [...state.favoriteAuxies] }
                if (state.filter !== 'off') return { ...state, shownAuxies: [...state.filteredAuxies] }
                return {
                    ...state,
                    shownAuxies: [...state.auxies],
                }
            } else {
                state.filteredAuxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return -1
                    if (prev.averageRating < next.averageRating) return 1
                    return 0
                })
                state.auxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return -1
                    if (prev.averageRating < next.averageRating) return 1
                    return 0
                })
                state.favoriteAuxies.sort((prev, next) => {
                    if (prev.averageRating > next.averageRating) return -1
                    if (prev.averageRating < next.averageRating) return 1
                    return 0
                })
                if (state.showFavorites) return { ...state, shownAuxies: [...state.favoriteAuxies] }
                if (state.filter !== 'off') return { ...state, shownAuxies: [...state.filteredAuxies] }
                return {
                    ...state,
                    shownAuxies: [...state.auxies],
                }
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
                shownAuxies: [...state.backupAuxies],
                auxies: [...state.backupAuxies],
                filteredAuxies: [...state.backupAuxies],
                favoriteAuxies: [...state.backupAuxies],
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
                    claims: [...state.claims, action.payload],
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
                    ...state.loggedUser,
                    firstLogin: action.payload,
                },
            }
        // caso por defecto si por alguna razón no recibe action.type
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
