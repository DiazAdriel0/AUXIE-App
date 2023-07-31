import { configureStore } from '@reduxjs/toolkit'
import Auxies from './auxiesSlice'

export default configureStore({
    reducer: {
        Auxies: Auxies,
    },
})