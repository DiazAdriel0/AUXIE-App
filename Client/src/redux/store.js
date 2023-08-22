import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loggedUser', 'filter', 'nightMode'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
)
export let persistor = persistStore(store)
