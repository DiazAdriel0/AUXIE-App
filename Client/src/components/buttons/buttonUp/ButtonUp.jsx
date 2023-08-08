import style from './buttonUp.module.scss'
import arrowUp from '../../../assets/icons/arrow-up.svg'

const ButtonUp = ({ observersLanding }) => {
    const { firstObserver, secondObserver, thirdObserver } = observersLanding
    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
            {firstObserver || secondObserver || thirdObserver ? (
                <div className={style.upDiv}>
                    <button onClick={handleButtonUp} className={style.buttonUp}>
                        <img src={arrowUp} alt="" />
                    </button>
                </div>
            ) : (
                <div className={style.upDiv}>
                    <button
                        onClick={handleButtonUp}
                        className={style.buttonUpHide}
                    >
                        <img src={arrowUp} alt="" />
                    </button>
                </div>
            )}
        </>
    )
}

export default ButtonUp
