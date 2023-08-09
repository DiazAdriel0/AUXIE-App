import axios from 'axios'
import {
    GET_ALL_AUXIES,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    GET_AUXIE_DETAILS,
    GET_CONSUMER_DETAILS,
    LOGED_USER,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING,
    MENU_OPEN,
    SET_CURRENT_PAGE,
    RESET_AUXIES_CATALOG,
    LOGOUT,
    SET_TOKEN,
    RESET_TOKEN,
} from './actionTypes'

//action que pide todos los auxies del back (reemplazar URL)
export function getAllAuxies(token) {
    return async function (dispatch) {
        /* 'https://run.mocky.io/v3/f408d4d3-183d-46de-9b9b-e2eb86327ef0' */
        try {
            const res = await axios('/providers', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            return dispatch({
                type: GET_ALL_AUXIES,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

//action que pide todos los servicios del back (reemplazar URL)
export function getAllServices(token) {
    return async function (dispatch) {
        try {
            const res = await axios('/services', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })

            return dispatch({
                type: GET_ALL_SERVICES,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function getDetails(id, token) {
    return async function (dispatch) {
        try {
            const res = await axios(`/providers/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            return dispatch({
                type: GET_AUXIE_DETAILS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function getDetailsConsumer(id, token) {
    return async function (dispatch) {
        try {
            const res = await axios(`/consumers/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            return dispatch({
                type: GET_CONSUMER_DETAILS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function filterAuxiesByService(service) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: FILTER_AUXIES_BY_SERVICE,
                payload: service,
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function orderAuxiesByPrice(order) {
    return function (dispatch) {
        try {
            return dispatch({
                type: ORDER_AUXIES_BY_PRICE,
                payload: order,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}
export function orderAuxiesByRating(order) {
    return function (dispatch) {
        try {
            return dispatch({
                type: ORDER_AUXIES_BY_RATING,
                payload: order,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function menuOpen(boolean) {
    return function (dispatch) {
        try {
            return dispatch({
                type: MENU_OPEN,
                payload: boolean,
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export const setCurrentPage = (page) => {
    return (dispatch) => {
        return dispatch({
            type: SET_CURRENT_PAGE,
            payload: Number(page),
        })
    }
}
export function resetAuxiesCatalog(token) {
    return function (dispatch) {
        try {
            return dispatch({
                type: RESET_AUXIES_CATALOG,
            }, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function loggedUser(logedUser) {
    return function (dispatch) {
        try {
            return dispatch({
                type: LOGED_USER,
                payload: logedUser,
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function logOut(empty) {
    return function (dispatch) {
        try {
            return dispatch({
                type: LOGOUT,
                payload: empty,
            })
        } catch (e) {
            console.error(e)
        }
    }
}
export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}
export function resetToken() {
    return {
        type: RESET_TOKEN,
    }
}

// action que me guarda los datos de un auxie que me devuelve el back por id (innecesario guardarme esta info en el global state por ahora)

// export function getDetails(id) {
//     return async function (dispatch) {
//         try {
//             const res = await axios(
//                 `/providers/${id}`
//             )
//             return dispatch({
//                 type: GET_AUXIE_DETAILS,
//                 payload: res.data,
//             })
//         } catch (e) {
//             console.log(e.response.data)
//         }
//     }
// }
