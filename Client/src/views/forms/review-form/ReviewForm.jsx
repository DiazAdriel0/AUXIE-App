import { Button, Rating, TextField } from '@mui/material'
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

const ReviewForm = ({ serviceName, providerName, providerId }) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const [review, setReview] = useState({
        consumerId: user.id,
        providerId,
        serviceName,
        review: '',
        score: null,
    })
    const [providerUid, setProviderUid] = useState('')
    const [sent, setSent] = useState(false)
    const { sendNotification } = useNotify(providerUid)
    const [aux, setAux] = useState(false)

    useEffect(() => {
        if (providerUid && sent) {
            sendNotification(`${user.firstName} ${user.lastName} ha dejado una reseña sobre tu servicio.`)
            setSent(false)
        }
    }, [aux, providerUid])

    const handleInputChange = event => {
        const { name, value } = event.target
        setReview(previousValue => ({ ...previousValue, [name]: value }))
    }

    const labels = {
        0.5: 'Horrible',
        1: 'Pésimo',
        1.5: 'Muy Malo',
        2: 'Malo',
        2.5: 'Regular',
        3: 'Bueno',
        3.5: 'Muy Bueno',
        4: 'Buenísimo',
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
                Swal.fire('Gracias por tu opinión!')
                navigate('/profile')
            }
        } catch (error) {
            console.error(error + error.response)

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response,
                footer: '<a href="">¿Por qué está pasando esto?</a>',
            })
        }
    }
    const handleSubmit = async e => {
        e.preventDefault()

        axios(`providers/${review.providerId}`)
            .then(({ data }) => {
                if (data) {
                    let uid = data.userUid || data.googleId
                    setProviderUid(uid)
                }
            })
            .catch(error => {
                console.error(error.message)
            })

        handlePost()
    }
    return (
        <div className={style.form}>
            <form id='form' onSubmit={handleSubmit}>
                <h1>Califica a tu auxie</h1>
                <div className={style.pickerContainer}>
                    <div>
                        <label>Auxie que vas a calificar</label>
                        <p>{providerName}</p>
                    </div>
                    <div>
                        <label>Servicio que realizó</label>
                        <p>{serviceName}</p>
                    </div>

                    <label>¿Qué calificación le das al auxie?</label>
                    <Rating
                        className={style.picker}
                        name='score'
                        value={ratingValue}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue)
                            setReview(previousValue => ({
                                ...previousValue,
                                score: newValue,
                            }))
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover)
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
                    />
                    {ratingValue !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ratingValue]}</Box>}
                    <div>
                        <label>Escribe tu reseña:</label>
                        <TextField
                            className={style.picker}
                            fullWidth
                            id='outlined-basic'
                            label='Escribe tus comentarios'
                            variant='outlined'
                            required
                            multiline
                            color='primary'
                            name='review'
                            value={review.review}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <center>
                    <Button
                        onClick={() => {
                            setAux(!aux)
                            setSent(true)
                        }}
                        className={style.send}
                        variant='contained'
                        endIcon={<SendIcon />}
                        type='submit'
                    >
                        Enviar
                    </Button>
                </center>
            </form>
        </div>
    )
}

export default ReviewForm
