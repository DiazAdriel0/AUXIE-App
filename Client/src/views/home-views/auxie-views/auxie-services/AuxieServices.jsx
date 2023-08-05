import style from './auxieServices.module.scss'

//Hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'
//Components

import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import TableServices from '../../../../components/home-auxie-components/table-services/TableServices'
import CardsJobs from '../../../../components/home-auxie-components/cards-jobs/CardsJobs'
import Pagination from '../../../../components/pagination/Pagination'

const AuxieServices = () => {
    const loggedUser = useSelector((state) => state.loggedUser)
    const [tableOrCard, setTableOrCard] = useState(true)
    const handleChange = () => {
        setTableOrCard(!tableOrCard)
    }
    return (
        <div className={style.services}>
            <header className={style.header}>
                <h2>Auxie Services</h2>
            </header>
            {/* aside */}
            <AsideAuxie />
            {/* main */}
            <main className={style.main}>
                <button onClick={handleChange}>
                    {tableOrCard ? 'Change to cards' : 'change to table'}
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
    )
}

export default AuxieServices
