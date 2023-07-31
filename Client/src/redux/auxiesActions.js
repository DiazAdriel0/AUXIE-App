import axios from 'axios'
import { getAuxies, getServices, getAuxieDetails } from './auxiesSlice'


//action que pide todos los auxies del back (reemplazar URL)
export const getAllAuxies = () => (dispatch) => {
    axios('https://run.mocky.io/v3/2e14d09c-a9cb-4acf-9e56-a01ef1403342')
    .then(res=>dispatch(getAuxies(res.data)))
    .catch(e=>console.log(e))
}
