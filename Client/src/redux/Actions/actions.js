import axios from 'axios'
import { GETALLAUXIES, GETALLSERVICES, GETAUXIEDETAILS, FILTERAUXIESBYSERVICE, ORDERAUXIESBYPRICE } from './actionTypes'


//action que pide todos los auxies del back (reemplazar URL)
export function getAllAuxies() {
    return async function (dispatch) {
        try {
            const res = await axios('https://run.mocky.io/v3/2e14d09c-a9cb-4acf-9e56-a01ef1403342')
            return dispatch({
                type: GETALLAUXIES,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

//action que pide todos los servicios del back (reemplazar URL)
export function getAllServices(){
    return async function (dispatch) {
        try {
            const res = await axios('https://run.mocky.io/v3/7fd65496-8e81-4d60-a259-0f38c05de0ee')
            return dispatch({
                type: GETALLSERVICES,
                payload: res.data
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
            const res = await axios('https://run.mocky.io/v3/28f92212-bec6-49bf-b9cb-034610f93603')
            return dispatch({
                type:GETAUXIEDETAILS,
                payload: res.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export function filterAuxiesByService(service) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: FILTERAUXIESBYSERVICE,
                payload: service
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export function orderAuxiesByPrice(order) {
    return function (dispatch) {
        try {
            return dispatch({
                type: ORDERAUXIESBYPRICE,
                payload: order
            })
        } catch (e) {
            console.log(e);
        }
    }
}

