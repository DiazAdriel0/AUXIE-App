import { recentOrderData } from '../../lib/data/rechartData'
import { format } from 'date-fns'
import { getOrderStatus } from '../../lib/helpers/index'
import { useSelector } from 'react-redux'
const TableTransactions = () => {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <div
            className={
                nightMode
                    ? 'bg-neutral-900 mt-4  p-4  rounded-sm flex-1'
                    : 'bg-white mt-4  px-4 pb-4 rounded-sm border border-gray-200 flex-1'
            }
        >
            <strong className={nightMode ? 'text-gray-200 font-medium' : 'text-gray-700 font-medium'}>
                Últimos pagos
            </strong>
            <div className=' rounded-sm mt-3'>
                <table className={nightMode ? 'w-full text-gray-200' : 'w-full text-gray-700'}>
                    <thead>
                        <tr>
                            <th className='text-left'>ID</th>
                            <th className='text-left'>ID servicio</th>
                            <th className='text-left'>Nombre cliente</th>
                            <th className='text-left'>Fecha orden</th>
                            <th className='text-left'>Precio</th>
                            <th className='text-left'>Dirección</th>
                            <th className='text-left'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map(order => (
                            <tr className={nightMode ? 'text-gray-200 ' : 'text-gray-700 '} key={order.id}>
                                <td className='p-2'>#{order.id}</td>
                                <td>#{order.product_id}</td>
                                <td>{order.customer_name}</td>
                                <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>{getOrderStatus(order.current_payment_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTransactions
