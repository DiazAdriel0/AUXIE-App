import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import useNotify from '../../hooks/useNotify'
import { useSelector } from 'react-redux';
import axios from 'axios';

const PaymentSuccess = ()=>{

    const navigate = useNavigate()
    const handleRedirect = (e)=>{
        e.preventDefault()
        navigate('/homeConsumer')
    }
    const user = useSelector(state=>{
        return state.loggedUser
    })
    const {id} = useParams()
    const { sendNotification } = useNotify(id)

useEffect(()=>{
    axios(`/providers/uid/${id}`).then(({data})=>{
        const hay = user.requiredServices.slice().filter(trabajo=>trabajo.providerId === data.id )
        if(hay.length){
            sendNotification(`${user.firstName} ${user.lastName} ha acreditado el pago.`)
        }else{
            return navigate('/homeConsumer')
        }
    }).catch((error)=>{
        console.error(error);
        navigate('/homeConsumer')
    })


},[])

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