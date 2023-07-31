import { createSlice } from '@reduxjs/toolkit'

export const auxiesSlice = createSlice({
    name: 'Auxies',
    initialState: {
        auxies: [],
        services: [],
        details: {},
    },
    reducers: {
        getAuxies: (state, action) => {
            state.auxies = action.payload
        },
        getServices: (state, action) => {
            state.services = action.payload
        },
        getAuxieDetails: (state, action) => {
            state.details = action.payload
        }
    },
})

export const {getAuxies, getServices, getAuxieDetails} = auxiesSlice.actions
export default auxiesSlice.reducer
