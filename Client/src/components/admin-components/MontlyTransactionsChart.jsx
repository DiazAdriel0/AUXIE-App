import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { data04 } from '../../lib/data/rechartData'

const MontlyTransactionsChart = (
    <BarChart width={600} height={300} data={data04}>
        <XAxis dataKey='name' stroke='#8884d8' />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Bar dataKey='income' fill='#8884d8' barSize={30} />
    </BarChart>
)

export default MontlyTransactionsChart
