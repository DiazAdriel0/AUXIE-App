const data = [
    {
        name: 'Ene',
        expense: 2500,
        income: 5500,
    },
    {
        name: 'Feb',
        expense: 2700,
        income: 5200,
    },
    {
        name: 'Mar',
        expense: 2800,
        income: 5100,
    },
    {
        name: 'MaAbrr',
        expense: 2600,
        income: 5300,
    },
    {
        name: 'May',
        expense: 2900,
        income: 5000,
    },
    {
        name: 'Jun',
        expense: 2500,
        income: 5500,
    },
    {
        name: 'Jul',
        expense: 2700,
        income: 5200,
    },
    {
        name: 'Ago',
        expense: 3000,
        income: 4900,
    },
    {
        name: 'Sep',
        expense: 2400,
        income: 5700,
    },
    {
        name: 'Oct',
        expense: 2800,
        income: 5100,
    },
    {
        name: 'Nov',
        expense: 2600,
        income: 5300,
    },
    {
        name: 'Dec',
        expense: 2900,
        income: 5000,
    },
]

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const TransactionChart = () => {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
            <strong className='text-gray-700 font-medium'>Transacciones</strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray='3 3 0 0' vertical={false} />
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
