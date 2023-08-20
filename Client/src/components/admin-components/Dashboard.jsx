import BuyerProfileChart from './BuyerProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
function Dashboard() {
    return (
        <div className='px-2 flex flex-col gap-4'>
            <DashboardStatsGrid />
            <div className='flex flex-row gap-4 w-full'>
                <TransactionChart />
                <BuyerProfileChart />
            </div>
        </div>
    )
}

export default Dashboard
