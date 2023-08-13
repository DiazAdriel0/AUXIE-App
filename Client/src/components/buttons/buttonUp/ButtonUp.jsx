import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useSelector } from 'react-redux'
import style from './buttonUp.module.scss'

const ButtonUp = ({ observersLanding }) => {
    const { firstObserver, secondObserver, thirdObserver } = observersLanding
    const { upDiv, buttonUp, buttonUpHide } = style
    const nightMode = useSelector((state) => state.nightMode)

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const buttonColor = !nightMode ? '#333' : '#fff' // Cambia el color según el modo

    return (
        <>
            {firstObserver || secondObserver || thirdObserver ? (
                <div className={upDiv}>
                    <Button
                        style={
                            !nightMode ? null : { backgroundColor: '#0b0b25' }
                        }
                        onClick={handleButtonUp}
                        className={buttonUp}
                    >
                        <KeyboardArrowUpIcon
                            style={{ color: buttonColor, fontSize: '4rem' }}
                        />
                    </Button>
                </div>
            ) : (
                <div className={upDiv}>
                    <Button onClick={handleButtonUp} className={buttonUpHide}>
                        <KeyboardArrowUpIcon
                            style={{ color: buttonColor, fontSize: '2rem' }}
                        />
                    </Button>
                </div>
            )}
        </>
    )
}

export default ButtonUp
