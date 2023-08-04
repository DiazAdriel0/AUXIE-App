import style from './auxieServices.module.scss'

//Hooks
import { useState } from 'react'
import data from '../../../../API/data'
//Components

import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import TableServices from '../../../../components/home-auxie-components/table-services/TableServices'
import CardsServices from '../../../../components/cards-services/CardsServices'
import Pagination from '../../../../components/pagination/Pagination'

const AuxieServices = () => {
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
                {tableOrCard ? (
                    <TableServices data={data} />
                ) : (
                    <CardsServices />
                )}
            </main>

            {/* footer */}
            <footer className={style.footer}>
                <Pagination data={data} num={15} />
            </footer>
        </div>
    )
}

export default AuxieServices
