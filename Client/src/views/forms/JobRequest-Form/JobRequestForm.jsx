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
                <div>JobRequestForm</div>
                <div className={style.form}>
                    <form
                        id="form"
                        // onSubmit={handleSubmit}
                    >
                        <div>
                            <label>Cuando necesitas el servicio?</label>
                            <br />
                            <DatePicker
                                className={style.picker}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </div>
                        <div>.</div>
                        <div>
                            <label>Elige un horario</label>
                            <br />
                            <TimePicker
                                className={style.picker}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </div>
                        <div>
                            <label>
                                Selecciona el servicio que deseas contratar
                            </label>
                            <br />
                            <TextField
                                required
                                className={style.picker}
                                id="service"
                                select
                                fullWidth
                                label="Select"
                                helperText="Selecciona un servicio"
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
                            <br />
                            <TextField
                                className={style.picker}
                                fullWidth
                                id="outlined-basic"
                                label="Descripcion"
                                variant="outlined"
                                required
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
