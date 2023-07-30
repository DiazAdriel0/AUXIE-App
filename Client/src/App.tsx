// Styles
import './App.scss'
// Import Hooks
import { Route, Routes } from 'react-router-dom'

// Import Views
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import PageNotFound from './views/page-not-found/PageNotFound'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/form" element={<Form />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App
