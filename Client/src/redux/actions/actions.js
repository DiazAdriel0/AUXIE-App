import axios from 'axios'
import {
    GET_ALL_CLIENTS,
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
    SET_STATUS,
    UPDATE_PROFILE,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    TURN_LIGHT_NIGHT_MODE,
    POST_CLAIM,
    GET_CLAIM_ID,
    GET_CLAIMS,
    GET_ALL_CLAIMS,
    UPDATE_CONSUMER,
    UPDATE_PROVIDER,
    FIRST_LOGIN,
    SWITCH_FAVORITES,
} from './actionTypes'

//action que pide todos los auxies del back (reemplazar URL)
export function getAllAuxies() {
    return async function (dispatch) {
        /* 'https://run.mocky.io/v3/f408d4d3-183d-46de-9b9b-e2eb86327ef0' */
        try {
            const res = await axios('/providers')
            return dispatch({
                type: GET_ALL_AUXIES,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function getClaims(email) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/claims?email=${email}`)
            return dispatch({
                type: GET_CLAIMS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function getAllClaims() {
    return async function (dispatch) {
        try {
            const res = await axios.get('/claims')
            return dispatch({
                type: GET_ALL_CLAIMS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

//action que pide todos los servicios del back (reemplazar URL)
export function getAllServices() {
    return async function (dispatch) {
        try {
            const res = await axios('/services')

            return dispatch({
                type: GET_ALL_SERVICES,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response)
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const res = await axios(`/providers/${id}`)
            return dispatch({
                type: GET_AUXIE_DETAILS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response)
        }
    }
}

export function getDetailsConsumer(id) {
    return async function (dispatch) {
        try {
            const res = await axios(`/consumers/${id}`)
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
            console.error(e)
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

export const setCurrentPage = page => {
    return dispatch => {
        return dispatch({
            type: SET_CURRENT_PAGE,
            payload: Number(page),
        })
    }
}
export function resetAuxiesCatalog() {
    return function (dispatch) {
        try {
            return dispatch({
                type: RESET_AUXIES_CATALOG,
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
/* export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}
export function resetToken() {
    return {
        type: RESET_TOKEN,
    }
    UPDATE_PROFILE
} */

export function updateProfile(input, user) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`/${user}/profile`, input, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            return dispatch({
                type: UPDATE_PROFILE,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.message)
        }
    }
}

export function addFavorite(fav) {
    return async function (dispatch) {
        try {
            const res = await axios.put('/consumers/fav', fav)

            return dispatch({
                type: ADD_FAVORITE,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.error)
        }
    }
}

export function removeFavorite(fav) {
    return async function (dispatch) {
        try {
            const res = await axios.delete(`/consumers/delete/fav?consumerId=${fav.consumerId}&id=${fav.id}`)

            return dispatch({
                type: DELETE_FAVORITE,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.error)
        }
    }
}

export function turnLightNightMode(boolean) {
    return function (dispatch) {
        try {
            return dispatch({
                type: TURN_LIGHT_NIGHT_MODE,
                payload: boolean,
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function setServiceStatus(info) {
    return async function (dispatch) {
        try {
            const res = await axios.put('/providers/jobUpdate', info)
            return dispatch({
                type: SET_STATUS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export const postClaim = (input, image) => {
    return async dispatch => {
        const res = await axios.post(
            '/claims',
            { ...input, image },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        return dispatch({
            type: POST_CLAIM,
            payload: res.data,
        })
    }
}

// action para actualizar la info del usuario loggeado, falta la ruta del back

export function updateConsumer(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/consumers/${id}`)
            return dispatch({
                type: UPDATE_CONSUMER,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}
export function updateProvider(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/providers/${id}`)
            return dispatch({
                type: UPDATE_PROVIDER,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function updateFirstLogin(typeUser, id) {
    return async function (dispatch) {
        try {
            axios.put(`/${typeUser}/firstLogin`, { id })
            return dispatch({
                type: FIRST_LOGIN,
                payload: false,
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function getAllClients() {
    return async function (dispatch) {
        try {
            const res = await axios.get('/consumers')
            return dispatch({
                type: GET_ALL_CLIENTS,
                payload: res.data,
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}

export function switchFavorites(state) {
    return async function (dispatch) {
        return dispatch({
            type: SWITCH_FAVORITES,
            payload: state,
        })
    }
}

export const getClaimId = id => {
    return async dispatch => {
        const { data } = await axios.get(`/claims/${id}`)
        dispatch({
            type: GET_CLAIM_ID,
            payload: data,
        })
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
//             console.error(e.response.data)
//         }
//     }
// }
