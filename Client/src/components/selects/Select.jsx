import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const BasicSelect = () => {
    const nightMode = useSelector(state => state.nightMode)
    const navigate = useNavigate()
    const handleChange = event => {
        const { value } = event.target
        navigate('/' + value)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl className='w-full h-6 '>
                <InputLabel size='small' id='demo-simple-select-label'>
                    Compañía
                </InputLabel>
                <Select
                    className='w-full h-10'
                    style={nightMode ? { backgroundColor: 'white', color: 'black' } : null}
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Compañia'
                    onChange={handleChange}
                >
                    <MenuItem value='aboutUs'>¿Quiénes somos?</MenuItem>
                    <MenuItem value='offer'>¿Qué ofrecemos?</MenuItem>
                    <MenuItem value='howItWorks'>¿Cómo funciona Auxie?</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default BasicSelect
