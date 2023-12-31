import { DatePicker } from '@mui/x-date-pickers'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import style from './jobrequestform.module.scss'
import { useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useNotify from '../../../hooks/useNotify'
import CircularProgress from '@mui/material/CircularProgress'

const JobRequestForm = ({ services, recipient }) => {
    let { id } = useParams()
    const client = useSelector(state => state.loggedUser)
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState({
        clientId: client.id,
        service: '',
        jobDate: '',
        jobTime: '',
        description: '',
        paymentMethod: '',
    })
    const { sendNotification } = useNotify(recipient)

    const handleInputChange = event => {
        const { name, value } = event.target
        setValue(previousvalue => ({ ...previousvalue, [name]: value }))
    }
    const handleServiceChange = event => {
        const { value } = event.target 
        setValue(previousvalue => ({
            ...previousvalue,
            service: value,
        }))
    }
    const handlePaymentChange = event => {
        const { value } = event.target
        setValue(previousvalue => ({
            ...previousvalue,
            paymentMethod: value,
        }))
    }
    const handlePost = async () => {
        try {
            const response = await axios.put(`/providers/addJob/${id}`, value)
            if (response) {
                setLoading(false)
                Swal.fire('Cita solicitada!')
                setValue({
                    clientId: client.id,
                    service: '',
                    jobDate: '',
                    jobTime: '',
                    description: '',
                    paymentMethod: '',
                })
            }
        } catch (error) {
            setLoading(false)
            console.error(error + error.response.data.error)

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.error,
                footer: '<a href="">¿Por qué está pasando esto?</a>',
            })
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        handlePost()
        sendNotification(`${client.firstName} ${client.lastName} te ha solicitado un servicio de ${value.service}`)
    }
    return (
        <div>
            <center>
                <div className={style.form}>
                    <form id='form' onSubmit={handleSubmit}>
                        <div>
                            <h1>Agenda cita</h1>
                        </div>
                        <div>
                            <label>Elige fecha</label>

                            <DatePicker
                                className={style.picker}
                                disablePast
                                value={value.jobDate}
                                onChange={date =>
                                    setValue(previousvalue => ({
                                        ...previousvalue,
                                        jobDate: date,
                                    }))
                                }
                                sx={{
                                    color: 'primary.main',
                                    border: 2,
                                    borderRadius: 1.4,
                                    borderColor: 'primary.main',
                                }}
                            />
                        </div>

                        <div>
                            <label>Elige horario</label>
                            <TimePicker
                                className={style.picker}
                                value={value.jobTime}
                                onChange={time =>
                                    setValue(previousvalue => ({
                                        ...previousvalue,
                                        jobTime: time,
                                    }))
                                }
                                sx={{
                                    color: 'primary.main',
                                    border: 2,
                                    borderRadius: 1.4,
                                    borderColor: 'primary.main',
                                }}
                            />
                        </div>
                        <div>
                            <label>Selecciona el servicio que deseas contratar</label>

                            <TextField
                                required
                                className={style.picker}
                                id='service'
                                select
                                fullWidth
                                label='Servicio'
                                helperText='Selecciona un servicio'
                                color='primary'
                                focused
                                name='service'
                                value={value.service}
                                onChange={handleServiceChange}
                            >
                                {services ? (
                                    services.map(service => (
                                        <MenuItem key={service.name} value={service.name}>
                                            {service.name}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <div></div>
                                )}
                            </TextField>
                        </div>
                        <div>
                            <label>Descripción del trabajo que necesita:</label>

                            <TextField
                                className={style.picker}
                                fullWidth
                                id='outlined-basic'
                                label='descripcion'
                                variant='outlined'
                                required
                                multiline
                                color='primary'
                                focused
                                name='description'
                                value={value.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Método de pago:</label>
                            <TextField
                                required
                                className={style.picker}
                                id='payment'
                                select
                                fullWidth
                                label='Método de pago'
                                helperText='Selecciona un método de pago'
                                color='primary'
                                focused
                                name='payment'
                                value={value.paymentMethod}
                                onChange={handlePaymentChange}
                            >
                                <MenuItem value='efectivo'>Efectivo en persona</MenuItem>
                                <MenuItem value='app'>A través de nuestra app</MenuItem>
                            </TextField>
                        </div>

                        {loading ? (
                            <CircularProgress />
                        ) : (
                            <Button className={style.send} variant='contained' endIcon={<SendIcon />} type='submit'>
                                Enviar
                            </Button>
                        )}
                    </form>
                </div>
            </center>
        </div>
    )
}

export default JobRequestForm
