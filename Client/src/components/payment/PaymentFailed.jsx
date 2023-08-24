import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const PaymentFailed = ()=>{
    const navigate = useNavigate()
    const handleRedirect = (e)=>{
        e.preventDefault()
        navigate('/requestedservices')
    }
    return (
        <main>
        <section className="flex flex-col items-center justify-center h-screen">
            <HighlightOffRoundedIcon style={{ fontSize: '240px', width: '240px', height: '240px' }}className="text-red-600 h-72 w-72" ></HighlightOffRoundedIcon>
            <h1 className="py-6 font-bold text-3xl">
                Hubo un problema con el pago
            </h1>
            <button className=" font-semibold py-4 px-4 rounded-md" onClick={handleRedirect} >Volver a intentarlo </button>
            <Link to='/homeConsumer' className="py-4 underline">No, regresar a Home</Link>
        </section>
        
    </main>
    )
    
    }
    
    export default PaymentFailed