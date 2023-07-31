import axios from 'axios'
import { getAuxies, getServices, getAuxieDetails } from './auxiesSlice'

export const getAllAuxies = () => {
    try {
        const res = axios(
            'https://run.mocky.io/v3/2e14d09c-a9cb-4acf-9e56-a01ef1403342'
        )
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
