import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const BasicSelect = () => {
    const nightMode = useSelector((state) => state.nightMode)
    const navigate = useNavigate()
    const handleChange = (event) => {
        const { value } = event.target
        navigate('/' + value)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Compañia</InputLabel>
                <Select
                    style={
                        nightMode
                            ? { backgroundColor: 'white', color: 'black' }
                            : null
                    }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Compañia"
                    onChange={handleChange}
                >
                    <MenuItem value="aboutUs">Quiénes Somos</MenuItem>
                    <MenuItem value="offer">Que ofrecemos</MenuItem>
                    <MenuItem value="howItWorks">Como funciona Auxie</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default BasicSelect
