import {
    GETALLAUXIES,
    GETALLSERVICES,
    GETAUXIEDETAILS,
    FILTERAUXIESBYSERVICE,
    ORDERAUXIESBYPRICE,
} from './Actions/actionTypes'

let initialState = {
    auxies: [],
    backupAuxies:[],
    filteredAuxies: [],
    services: [],
    details: {},
    filter:'off'
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GETALLAUXIES:
            return {
                ...state,
                auxies: action.payload,
                filteredAuxies: [...action.payload],
                backupAuxies: [...action.payload]
            }
        case GETAUXIEDETAILS:
            return { ...state, details: action.payload }
        case GETALLSERVICES:
            return { ...state, services: action.payload }
        case FILTERAUXIESBYSERVICE:
            if (action.payload === 'off') {
                return { ...state, filteredAuxies: [...state.backupAuxies], filter: action.payload }
            }
            return {
                ...state,
                filter: action.payload,
                filteredAuxies: [...state.auxies].filter((aux) =>
                    aux.services.some(
                        (serv) =>
                            serv.service.toUpperCase() ===
                            action.payload.toUpperCase()
                    )
                ),
            }
        case ORDERAUXIESBYPRICE:
            if (state.filter !== 'off'){
                let serviceFiltered = state.filter
                if (action.payload === 'asc') {
                    let ascFilter = [...state.filteredAuxies].sort((prev, next) => {
                        if (prev.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price > next.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price) return 1
                        if (prev.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price < next.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price) return -1
                        return 0
                    })
                    return { ...state, 
                        filteredAuxies: [...ascFilter] }
                } else {
                    let descFilter = [...state.filteredAuxies].sort((prev, next) => {
                        if (prev.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price > next.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price) return -1
                        if (prev.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price < next.services.find(obj => obj.service === serviceFiltered.toLowerCase()).price) return 1
                        return 0
                    })
                    return { ...state, 
                        filteredAuxies: [...descFilter]
                     }
                }
            } else {
                return {...state}
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer
