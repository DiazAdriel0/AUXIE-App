import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { turnLightNightMode } from '../../../redux/actions/actions'
import { LightMode, NightlightRound } from '@mui/icons-material'

import style from './buttonLightNight.module.scss'

const ButtonLightNight = () => {
    const dispatch = useDispatch()
    const nightMode = useSelector((state) => state.nightMode)

    return (
        <Button
            onClick={() => dispatch(turnLightNightMode(!nightMode))}
            className={style.button}
            startIcon={!nightMode ? <LightMode /> : <NightlightRound />}
        >
            {!nightMode ? 'Light' : 'Night'}
        </Button>
    )
}

export default ButtonLightNight
