import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import {useNavigate} from 'react-router-dom'
const PaymentSuccess = ()=>{
    const navigate = useNavigate()
const handleRedirect = (e)=>{
    e.preventDefault()
    navigate('/homeConsumer')
}

return (
    <main>
        <section className="flex flex-col items-center justify-center h-screen">
            <CheckCircleOutlineRoundedIcon style={{ fontSize: '240px', width: '240px', height: '240px' }}className="text-green-500 h-72 w-72" ></CheckCircleOutlineRoundedIcon>
            <h1 className="py-6 font-bold text-3xl">
                El pago se ha registrado con exito
            </h1>
            <button className=" font-semibold py-4 px-4 rounded-md" onClick={handleRedirect} >Volver a Home</button>
        </section>
        
    </main>
)

}

export default PaymentSuccess