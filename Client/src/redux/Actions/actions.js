import axios from 'axios'
import {
    GET_ALL_AUXIES,
    GET_AUXIE_DETAILS,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING,
    LOG_OR_REG_VIEW,
    SET_CURRENT_PAGE,
} from './actionTypes'

//action que pide todos los auxies del back (reemplazar URL)
export function getAllAuxies() {
    return async function (dispatch) {
        /* 'https://run.mocky.io/v3/f408d4d3-183d-46de-9b9b-e2eb86327ef0' */
        try {
            const res = await axios('http://localhost:3001/providers')
            return dispatch({
                type: GET_ALL_AUXIES,
                payload: res.data,
            })
        } catch (e) {
            console.log(e.response.data)
        }
    }
}

//action que pide todos los servicios del back (reemplazar URL)
export function getAllServices() {
    return async function (dispatch) {
        try {
            const res = await axios('http://localhost:3001/services')

            return dispatch({
                type: GET_ALL_SERVICES,
                payload: res.data,
            })
        } catch (e) {
            console.log(e.response.data)
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const res = await axios(`http://localhost:3001/providers/${id}`)
            return dispatch({
                type: GET_AUXIE_DETAILS,
                payload: res.data,
            })
        } catch (e) {
            console.log(e.response.data)
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
            console.log(e)
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
            console.log(e.response.data)
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
            console.log(e.response.data)
        }
    }
}

export function toggleLogOrRegView(boolean) {
    return function (dispatch) {
        try {
            return dispatch({
                type: LOG_OR_REG_VIEW,
                payload: boolean,
            })
        } catch (e) {
            console.log(e)
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
