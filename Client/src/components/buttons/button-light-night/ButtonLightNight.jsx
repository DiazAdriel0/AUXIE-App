import style from './buttonLightNight.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { turnLightNightMode } from '../../../redux/actions/actions'

const ButtonLightNight = () => {
    const dispatch = useDispatch()
    const nightMode = useSelector((state) => state.nightMode)
    return (
        <button
            onClick={() => dispatch(turnLightNightMode(!nightMode))}
            className={style.button}
        >
            {!nightMode ? 'Light' : 'Night'}
        </button>
    )
}

export default ButtonLightNight
