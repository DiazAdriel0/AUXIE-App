import axios from 'axios'
import {
    GET_ALL_AUXIES,
    GET_AUXIE_DETAILS,
    GET_ALL_SERVICES,
    FILTER_AUXIES_BY_SERVICE,
    ORDER_AUXIES_BY_PRICE,
    ORDER_AUXIES_BY_RATING
} from './actionTypes'

//action que pide todos los auxies del back (reemplazar URL)
export function getAllAuxies() {
    return async function (dispatch) {
        try {
            const res = await axios(
                'https://run.mocky.io/v3/f408d4d3-183d-46de-9b9b-e2eb86327ef0'
            )
            return dispatch({
                type: GET_ALL_AUXIES,
                payload: res.data,
            })
        } catch (e) {
            console.log(e)
        }
    }
}

//action que pide todos los servicios del back (reemplazar URL)
export function getAllServices() {
    return async function (dispatch) {
        try {
            const res = await axios(
                'https://run.mocky.io/v3/7fd65496-8e81-4d60-a259-0f38c05de0ee'
            )

            return dispatch({
                type: GET_ALL_SERVICES,
                payload: res.data,
            })
        } catch (e) {
            console.log(e)
        }
    }
}

//action que pide un auxie especifico por id del back (reemplazar URL)
export function getDetails() {
    return async function (dispatch) {
        try {
            const res = await axios(
                'https://run.mocky.io/v3/28f92212-bec6-49bf-b9cb-034610f93603'
            )
            return dispatch({
                type: GET_AUXIE_DETAILS,
                payload: res.data,
            })
        } catch (e) {
            console.log(e)
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
            console.log(e)
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
            console.log(e)
        }
    }
}