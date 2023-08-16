import style from './auxieServices.module.scss'

//Hooks
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//Components
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import TableServices from '../../../../components/home-auxie-components/table-services/TableServices'
import CardsJobs from '../../../../components/home-auxie-components/cards-jobs/CardsJobs'
import Pagination from '../../../../components/pagination/Pagination'

const AuxieServices = () => {
    const loggedUser = useSelector((state) => state.loggedUser)
    const navigate = useNavigate()
    const [tableOrCard, setTableOrCard] = useState(true)
    const handleChange = () => {
        setTableOrCard(!tableOrCard)
    }

    const isAuxie = Object.keys(loggedUser).includes('services')

    useEffect(() => {
        if (Object.keys(loggedUser).length === 0) return navigate('/auxielogin')
        if (Object.keys(loggedUser).includes('requiredServices'))
            return navigate('/homeconsumer')
    }, [])
    return (
        <>
            {isAuxie ? (
                <div className={style.services}>
                    <header className={style.header}>
                        <NavGeneral />
                    </header>
                    {/* aside */}
                    <AsideAuxie />
                    {/* main */}
                    <main className={style.main}>
                        <button onClick={handleChange}>
                            {tableOrCard
                                ? 'Change to cards'
                                : 'change to table'}
                        </button>
                        {tableOrCard ? <TableServices /> : <CardsJobs />}
                    </main>

                    {/* footer */}
                    <footer className={style.footer}>
                        {tableOrCard ? (
                            <Pagination data={loggedUser.jobs} num={15} />
                        ) : (
                            <Pagination data={loggedUser.jobs} num={8} />
                        )}
                    </footer>
                </div>
            ) : null}
        </>
    )
}

export default AuxieServices
