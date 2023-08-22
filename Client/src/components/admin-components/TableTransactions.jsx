import { recentOrderData } from '../../lib/data/rechartData'
import { format } from 'date-fns'
import { getOrderStatus } from '../../lib/helpers/index'

const TableTransactions = () => {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-medium'>Ultimos Pagos</strong>
            <div className='border-x border-gray-200 rounded-sm mt-3'>
                <table className='w-full text-gray-700'>
                    <thead>
                        <tr>
                            <th className='text-left'>ID</th>
                            <th className='text-left'>ID Servicio</th>
                            <th className='text-left'>Nombre Cliente</th>
                            <th className='text-left'>Fecha Orden</th>
                            <th className='text-left'>Precio</th>
                            <th className='text-left'>Direccion</th>
                            <th className='text-left'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map(order => (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
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
