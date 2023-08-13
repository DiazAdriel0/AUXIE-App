import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './config/firebase-config.js'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
)
store.subscribe(() => {
    const state = store.getState()
    const body = document.body

    if (state.nightMode) {
        body.classList.add('night-mode')
        body.classList.remove('day-mode')
    } else {
        body.classList.add('day-mode')
        body.classList.remove('night-mode')
    }
})
