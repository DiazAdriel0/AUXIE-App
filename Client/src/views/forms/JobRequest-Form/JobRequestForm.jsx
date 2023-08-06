import { DatePicker } from '@mui/x-date-pickers'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import style from './jobrequestform.module.scss'
import { useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useSelector } from 'react-redux'
const JobRequestForm = ({ auxieusername,services }) => {
    const client = useSelector((state) => state.loggedUser)
    // const services = useSelector((state) => state.services)
    const [value, setValue] = useState({
        clientId: client.id,
        services: '',
        appointment:'',
        description: '',
    })
    console.log(value)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValue((previousvalue) => ({ ...previousvalue, [name]: value }))
    }

    return (
        //pasar por param id de auxie y por body "service name" (mapeado de servicios) "description" "client id de logged user"
        <div>
            <center>
               
                <div className={style.form}>
                    <form
                        id="form"
                        // onSubmit={handleSubmit}
                    >
                         <div>
                    <h1>Job Request Form</h1>
                </div>
                        <div>
                            
                            <div>
                                <label>Tu nombre de usuario</label>

                                <TextField
                                    className={style.picker}
                                    fullWidth
                                    id="outlined-basic"
                                    label="Usuario"
                                    name="username"
                                    variant="outlined"
                                    required
                                    color="secondary"
                                    focused
                                    value={client.username}
                                    disabled
                                />
                            </div>
                            <div>
                                <label>
                                    Nombre de usuario del Auxie a contratar
                                </label>

                                <TextField
                                    className={style.picker}
                                    fullWidth
                                    id="outlined-basic"
                                   
                                    variant="outlined"
                                    required
                                    color="secondary"
                                    focused
                                    value={auxieusername}
                                    disabled
                                />
                            </div>

                            <label>Elige fecha</label>

                            <DatePicker
                                className={style.picker}
                                value={value}
                                onChange={(appointment) =>
                                    setValue((previousvalue) => ({
                                        ...previousvalue,
                                        appointment,
                                    }))
                                }
                                sx={{
                                    border: 2,
                                    borderRadius: 1.4,
                                    borderColor: 'secondary.main',
                                }}
                            />
                        </div>

                        <div>
                            <label>Elige horario</label>
                            <TimePicker
                                className={style.picker}
                                value={value}
                                onChange={(appointment) =>
                                    setValue((previousvalue) => ({
                                        ...previousvalue,
                                        appointment,
                                    }))
                                }
                                sx={{
                                    border: 2,
                                    borderRadius: 1.4,
                                    borderColor: 'secondary.main',
                                }}
                            />
                        </div>
                        <div>
                            <label>
                                Selecciona el servicio que deseas contratar
                            </label>

                            <TextField
                                required
                                className={style.picker}
                                id="service"
                                select
                                fullWidth
                                label="Servicio"
                                helperText="Selecciona un servicio"
                                color="secondary"
                                focused
                                name="services"
                                value={value.services}
                                onChange={handleInputChange}
                                
                            >
                                {services &&
                                    services.map((service) => (
                                        <MenuItem
                                            key={service.name}
                                            value={service.name}
                                        >
                                            {service.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                        </div>
                        <div>
                            <label>Descripción del trabajo que necesita:</label>

                            <TextField
                                className={style.picker}
                                fullWidth
                                id="outlined-basic"
                                label="descripcion"
                                variant="outlined"
                                required
                                multiline
                                color="secondary"
                                focused
                                name="description"
                                value={value.description}
                                onChange={handleInputChange}
                            />
                        </div>

                        <Button
                            className={style.send}
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </center>
        </div>
    )
}

export default JobRequestForm
