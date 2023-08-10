// Styles
import './App.scss'
import { LocalizationProvider } from '@mui/x-date-pickers' //esto es para date and time picker (para citas)
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs' //esto es para date and time picker (para citas)
import 'dayjs/locale/en-gb';
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
//prueba
// Home
import HomeAuxie from './views/home/home-auxie/HomeAuxie'
import HomeConsumer from './views/home/home-consumer/HomeConsumer'

//Home  Views
import AuxieInbox from './views/home-views/auxie-views/auxie-inbox/AuxieInbox'
import AuxieServices from './views/home-views/auxie-views/auxie-services/AuxieServices'
import AuxieStatistics from './views/home-views/auxie-views/auxie-statistics/AuxieStatistics'

import ProfilePage from './views/profile/profilePage/profilePage'

//Forms
import Form from './views/forms/auxie-form/auxieForm'
import ClientForm from './views/forms/client-form/ClientForm'
import SupportForm from '../src/views/forms/support-form/SupportForm'

// Logins
import ClientLogin from './views/Login/consumer-login/clientLogin'
import AuxieLogin from './views/Login/auxie-login/auxieLogin'

import Detail from './views/detail/Detail'
import PageNotFound from './views/page-not-found/PageNotFound'
import JobRequestForm from './views/forms/JobRequest-Form/JobRequestForm'

// import Chat from './views/Chat/chat';
import ChatApp from './views/Chat/App';

import ButtonMercadoPago from './components/buttonMercadoPago/buttonMercadoPago';

//URL Back
import axios from 'axios'
const apiBackUrl = import.meta.env.VITE_API_BACK_URL
const urlApi = apiBackUrl || 'http://localhost:3001'
axios.defaults.baseURL = urlApi

// import { logOut, resetToken } from './redux/Actions/actions';

function App() {
    const dispatch = useDispatch()
    const token = useSelector(state=>{
        return state.token;
    })

    // window.addEventListener('beforeunload', function () {
    //     // Aquí puedes ejecutar la lógica de tu función logOut
    //     dispatch(logOut({}))
    //     dispatch(resetToken())
    // })
    //* use Effect to obtain data

    useEffect(() => {
        if (token) {
        dispatch(getAllAuxies(token))
        dispatch(getAllServices(token))
        }
    }, [])
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/* Landing Nav Views */}
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/guarantee" element={<Guarantee />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/howItWorks" element={<HowItWorks />} />
                    <Route path="/support" element={<SupportForm />} />
                    <Route path="/help" element={<Help />} />

                    {/* Home paths */}
                    <Route path="/homeconsumer" element={<HomeConsumer />} />
                    <Route path="/homeauxie" element={<HomeAuxie />} />

                    {/* Home views paths */}
                    <Route path="/auxieinbox" element={<AuxieInbox />} />
                    <Route path="/auxieservices" element={<AuxieServices />} />
                    <Route
                        path="/auxiestatistics"
                        element={<AuxieStatistics />}
                    />
                    <Route path="/jobrequest" element={<JobRequestForm />} />

                    {/*Detail paths  */}
                    <Route path="/detail/:id" element={<Detail />} />

                    {/*Profile paths */}
                    <Route path='/profile' element={<ProfilePage />} />

                    {/* Register paths */}
                    <Route path="/auxieform" element={<Form />} />
                    <Route path="/clientform" element={<ClientForm />} />
                    {/* Register paths */}

                    {/* Login paths */}
                    <Route path="/clientlogin" element={<ClientLogin />} />
                    <Route path="/auxielogin" element={<AuxieLogin />} />
                    {/* Login paths */}

                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/chat" element={<ChatApp />} />

                    <Route path='/create_preference' element={<ButtonMercadoPago/>}/>
                </Routes>
            </div>
        </LocalizationProvider>
    )
}

export default App
