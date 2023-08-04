// Styles
import './App.scss'
// Import Hooks
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { getAllAuxies, getAllServices } from './redux/Actions/actions'

// Import Views

//Landing Views
import Landing from './views/landing/Landing'
import AboutUs from './views/landingViews/aboutUs/AboutUs'
import Guarantee from './views/landingViews/guarantee/Guarantee'
import Help from './views/landingViews/help/Help'
import HowItWorks from './views/landingViews/howItWorks/HowItWorks'
import Offer from './views/landingViews/offer/Offer'

// Home Views
import HomeAuxie from './views/home/home-auxie/HomeAuxie'
import HomeConsumer from './views/home/home-consumer/HomeConsumer'

//Forms
import Form from './views/forms/auxie-form/auxieForm'
import ClientForm from './views/forms/client-form/ClientForm'
import SupportForm from '../src/views/forms/support-form/SupportForm'


// Logins
import ClientLogin from './views/Login/consumer-login/clientLogin'
import AuxieLogin from './views/Login/auxie-login/auxieLogin'

import Detail from './views/detail/Detail'
import PageNotFound from './views/page-not-found/PageNotFound'

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
                <Route path="/support" element={<SupportForm />}/>

                <Route path="/help" element={<Help />} />
                <Route path="/homeconsumer" element={<HomeConsumer />} />
                <Route path="/homeauxie" element={<HomeAuxie />} />
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

