import { data01 } from '../../lib/data/rechartData'
import { useSelector } from 'react-redux'

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const TransactionChart = () => {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <div
            className={
                nightMode
                    ? ' w-full h-[22rem] bg-neutral-900 p-4 rounded-sm border border-gray-200 flex flex-col flex-1'
                    : 'w-full h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'
            }
        >
            <strong className={nightMode ? 'text-gray-200 font-medium' : 'text-gray-700 font-medium'}>
                Transacciones Anuales
            </strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data01}
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray='4 1 2' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='income' fill='#0ea5e9' />
                        <Bar dataKey='expense' fill='#ea580c' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart
