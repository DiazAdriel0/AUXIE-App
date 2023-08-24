import { data06 } from '../../../lib/data/rechartData'

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const TransactionChart = () => {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
            <strong className='text-gray-700 font-medium'>Movimientos en el Perfil </strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data06}
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray='4 1 2' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='Visitas' fill='#6631a4' />
                        <Bar dataKey='Reservas' fill='#319aa4' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart
