import style from './auxieServices.module.scss'
import axios from 'axios'
//Hooks
import { useEffect } from 'react'
import { loggedUser } from '../../../../redux/actions/actions'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Components
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import TableServices from '../../../../components/home-auxie-components/table-services/TableServices'
import CardsJobs from '../../../../components/home-auxie-components/cards-jobs/CardsJobs'
import Pagination from '../../../../components/pagination/Pagination'

const AuxieServices = () => {
    const logged = useSelector(state => state.loggedUser)
    const [tableOrCard, setTableOrCard] = useState(true)
    const handleChange = () => {
        setTableOrCard(!tableOrCard)
    }

    const dispatch = useDispatch()
    const handleRefresh = async () => {
        try {
            const response = await axios.get(`/providers/${logged.id}`)
            if (response) {
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        handleRefresh()
    }, [])

    return (
        <div className={style.services}>
            <header className={style.header}>
                <NavGeneral />
            </header>
            {/* aside */}
            <AsideAuxie />
            {/* main */}
            <main className={style.main}>
                <TableServices />
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
