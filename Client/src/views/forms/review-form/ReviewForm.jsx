import { Button, MenuItem, Rating, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import { useSelector } from 'react-redux'

import style from './reviewform.module.scss'
import SendIcon from '@mui/icons-material/Send'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useNotify from '../../../hooks/useNotify'

const ReviewForm = () => {
    const navigate = useNavigate()
    const services = useSelector((state) => state.services)
    const user = useSelector((state) => state.loggedUser)

    const [review, setReview] = useState({
        consumerId: user.id,
        providerId:'',
        serviceId: '',
        review: '',
        score: null,
    })
    
    const [providerUid, setProviderUid] = useState('')
    const [sent, setSent] = useState(false)
    const { sendNotification } = useNotify(providerUid)
    const [aux, setAux] = useState(false)
    useEffect(()=>{
        if(providerUid && sent){
            console.log('te dieron reseña')
            sendNotification(`${user.firstName} ${user.lastName} ha dejado una reseña sobre tu servicio.`)
            setSent(false)
        }
    },[aux, providerUid])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setReview((previousValue) => ({ ...previousValue, [name]: value }))
    }

    const handleServiceChange = (event) => {
        const { value } = event.target
        setReview((previousValue) => ({
            ...previousValue,
            serviceId: value,
        }))
    }
    const handleAuxieChange = (event) => {
        const { value } = event.target
        setReview((previousValue) => ({
            ...previousValue,
            providerId: value,
        }))
    }
    const labels = {
        0.5: 'Horrible',
        1: 'Pesimo',
        1.5: 'Muy Malo',
        2: 'Malo',
        2.5: 'Regular',
        3: 'Bueno',
        3.5: 'Muy Bueno',
        4: 'Buenisimo',
        4.5: 'Excelente',
        5: 'El Mejor servicio',
    }

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
    }

    const [ratingValue, setRatingValue] = useState(2)
    const [hover, setHover] = useState(-1)
    const handlePost = async () => {
        try {
            const response = await axios.put(`/providers/reviews`, review)
            if (response) {
                const form = document.getElementById('form')
                form.reset()
                Swal.fire('Gracias por tu opinion!')
                navigate('/profile')
            }
        } catch (error) {
            console.log(error + error.response)

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response,
                footer: '<a href="">¿Por qué está pasando esto?</a>',
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        axios(`providers/${review.providerId}`).then(({data})=>{
            if(data){
                let uid= data.userUid || data.googleId
            setProviderUid(uid)
            }    
        }).catch((error)=>{console.error(error.message)})
 
        handlePost()
    }
    return (
        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit}>
                <h1>Califica a tu auxie</h1>
                <div className={style.pickerContainer}>
                    <div>
                        <label>¿A qué Auxie deseas calificar?</label>
                        <TextField
                            className={style.picker}
                            required
                            fullWidth
                            id="providerId" // Cambio de 'auxie' a 'providerId'
                            select
                            label="Auxie"
                            helperText="Selecciona un Auxie"
                            color="primary"
                            name="providerId" // Cambio de 'auxie' a 'providerId'
                            value={review.providerId} // Cambio de 'auxie' a 'providerId'
                            onChange={handleAuxieChange} // Cambio de handleAuxieChange a handleProviderChange
                        >
                            {user.requiredServices ? (
                                user.requiredServices.map((auxie) => (
                                    
                                    <MenuItem
                                        key={auxie.id}
                                        value={auxie.providerId} // Cambio de 'auxie' a 'providerId'
                                    >
                                        {auxie.providerName}
                                    </MenuItem>
                                ))
                            ) : (
                                <div></div>
                            )}
                        </TextField>
                    </div>
                    <div>
                        <label>Selecciona el servicio que se realizó</label>

                        <TextField
                            required
                            fullWidth
                            id="serviceId"
                            select
                            label="Servicio"
                            helperText="Selecciona un servicio"
                            color="primary"
                            name="serviceId"
                            value={review.serviceId}
                            onChange={handleServiceChange}
                            className={style.picker}
                        >
                            {services ? (
                                services.map((service) => (
                                    <MenuItem
                                        key={service._id}
                                        value={service._id}
                                    >
                                        {service.name}
                                    </MenuItem>
                                ))
                            ) : (
                                <div></div>
                            )}
                        </TextField>
                    </div>
                    <label>¿Qué calificación le das al auxie?</label>
                    <Rating
                        className={style.picker}
                        name="score"
                        value={ratingValue}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue)
                            setReview((previousValue) => ({
                                ...previousValue,
                                score: newValue,
                            }))
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover)
                        }}
                        emptyIcon={
                            <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                            />
                        }
                    />
                    {ratingValue !== null && (
                        <Box sx={{ ml: 2 }}>
                            {labels[hover !== -1 ? hover : ratingValue]}
                        </Box>
                    )}
                    <div>
                        <label>Escribe tu reseña:</label>
                        <TextField
                            className={style.picker}
                            fullWidth
                            id="outlined-basic"
                            label="Escribe tus comentarios"
                            variant="outlined"
                            required
                            multiline
                            color="primary"
                            name="review"
                            value={review.review}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <center>
                    <Button
                        onClick={
                            ()=>{
                            setAux(!aux)
                            setSent(true)
                            }
                        }
                        className={style.send}
                        variant="contained"
                        endIcon={<SendIcon />}
                        type="submit"
                    >
                        Enviar
                    </Button>
                </center>
            </form>
        </div>
    )
}

export default ReviewForm
