import { DatePicker } from '@mui/x-date-pickers'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import style from './jobrequestform.module.scss'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
const JobRequestForm = () => {
    const [value, setValue] = useState(null)
    console.log(value)

   


    return (
        //pasar por param id de auxie y por body "service name" (mapeado de servicios) "description" "client id de logged user"
        <div>
            <center>
                <div><h1>Job Request Form</h1></div>
                <div className={style.form}>
                    <form
                        id="form"
                        // onSubmit={handleSubmit}
                    >
                        <div>
                        <div>
                            <label>Escribe tu nombre de usuario</label>
                          
                            <TextField
                                className={style.picker}
                                fullWidth
                                id="outlined-basic"
                                label="Usuario"
                                variant="outlined"
                                required
                                color='secondary'
                                focused
                            />
                        </div>
                        <div>
                            <label>Nombre de usuario del Auxie a contratar</label>
                          
                            <TextField
                                className={style.picker}
                                fullWidth
                                id="outlined-basic"
                                label="Usuario de Auxie"
                                variant="outlined"
                                required
                                color='secondary'
                                focused
                            />
                        </div>
                        
                            <label>Cuando necesitas el servicio?</label>
                           
                            <DatePicker
                                className={style.picker}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                //#9C27B0 rgb(156, 39, 176)
                                sx={{border: 2, borderRadius:1.4, borderColor: 'secondary.main' }}
                            />
                        </div>
                        
                        <div>
                            <label>Elige un horario</label>
                            <TimePicker
                                className={style.picker}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                sx={{border: 2, borderRadius:1.4, borderColor: 'secondary.main'}}
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
                                color='secondary'
                                focused
                            >
                                {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
                            </TextField>
                        </div>
                        <div>
                            <label>Descripción del trabajo que necesita:</label>
                          
                            <TextField
                                className={style.picker}
                                fullWidth
                                id="outlined-basic"
                                label="Descripcion"
                                variant="outlined"
                                required
                                multiline
                                color='secondary'
                                focused
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
