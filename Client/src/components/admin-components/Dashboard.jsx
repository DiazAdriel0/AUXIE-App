import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

import BuyerProfileChart from './BuyerProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'
import PopularServices from './PopularServices'

function Dashboard() {
    const navigate = useNavigate()

    const loggedUser = useSelector(state => state.loggedUser)
    useEffect(() => {
        if (!loggedUser.isAdmin) {
            if (loggedUser.isAuxie) {
                navigate('/homeauxie')
            } else {
                navigate('/homeconsumer')
            }
        }
    }, [])
    return (
        <>
            <div className='px-2 flex flex-col gap-4 overflow-hidden'>
                <DashboardStatsGrid />
                <div className='flex flex-row gap-4 w-full'>
                    <TransactionChart />
                    <BuyerProfileChart />
                </div>
                <div className='flex flex-row gap-4 w-full mb-4 '>
                    <RecentOrders />
                    <PopularServices />
                </div>
            </div>
        </>
    )
}

export default Dashboard
