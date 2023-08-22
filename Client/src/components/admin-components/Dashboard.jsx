import BuyerProfileChart from './BuyerProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'
import PopularServices from './PopularServices'

function Dashboard() {
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
