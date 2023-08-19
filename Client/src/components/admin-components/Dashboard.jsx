import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
function Dashboard() {
    return (
        <div className='px-2 flex flex-col gap-4'>
            <DashboardStatsGrid />
            <TransactionChart />
        </div>
    )
}

export default Dashboard
