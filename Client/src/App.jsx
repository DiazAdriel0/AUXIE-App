// Styles
import './App.scss'
// Import Hooks
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { getAllAuxies, getAllServices } from './redux/Actions/actions'

// Import Views
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Form from './views/form/auxieForm'
import PageNotFound from './views/page-not-found/PageNotFound'
import AboutUs from './views/aboutUs/AboutUs'
import Guarantee from './views/guarantee/Guarantee'
import Help from './views/help/Help'
import ClientForm from './views/form/clientForm'
import ClientLogin from './views/Login/clientLogin'
import AuxieLogin from './views/Login/auxieLogin'
import Offer from './views/offer/Offer'
import HowItWorks from './views/howItWorks/HowItWorks'
import ComplainForm from './views/form/ComplainForm'


function App() {
    const dispatch = useDispatch()
    const auxies = useSelector((state) => state.auxies)
    const services = useSelector((state) => state.services)

      //* use Effect to obtain data

      useEffect(() => {
        if (!auxies.length) dispatch(getAllAuxies())
        if (!services.length) dispatch(getAllServices())
    }, [])
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* Landing Nav Views */}
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/guarantee" element={<Guarantee />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/howItWorks" element={<HowItWorks />} />
                <Route path="/complain" element={<ComplainForm />}/>

                <Route path="/help" element={<Help />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />

                {/* Register paths */}
                <Route path="/auxieform" element={<Form />} />
                <Route path="/clientform" element={<ClientForm />} />
                {/* Register paths */}

                {/* Login paths */}
                <Route path="/clientlogin" element={<ClientLogin />} />
                <Route path="/auxielogin" element={<AuxieLogin />} />
                {/* Login paths */}

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App
