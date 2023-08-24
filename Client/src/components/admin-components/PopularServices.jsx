import { popularServices } from '../../lib/data/rechartData'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
const PopularServices = () => {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <div
            className={
                nightMode
                    ? 'w-[20rem] bg-neutral-900 p-4 rounded-sm '
                    : 'w-[20rem] bg-white p-4 rounded-sm border border-gray-200'
            }
        >
            <strong className={nightMode ? 'text-gray-200 font-medium' : 'text-gray-700 font-medium'}>
                Servicios populares
            </strong>
            <div className='mt-4 flex flex-col gap-3'>
                {popularServices.map(product => (
                    <div key={product.id} className='flex items-start hover:no-underline'>
                        <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                            <img
                                className='w-full h-full object-cover rounded-sm'
                                src={product.product_thumbnail}
                                alt={product.product_name}
                            />
                        </div>
                        <div className='ml-4 flex-1'>
                            <p className={nightMode ? 'text-gray-200' : 'text-sm text-gray-500'}>
                                {product.product_name}
                            </p>
                            <span
                                className={classNames(
                                    product.product_stock === 0
                                        ? 'text-red-500'
                                        : product.product_stock > 50
                                        ? 'text-green-500'
                                        : 'text-orange-500',
                                    'text-xs font-medium'
                                )}
                            >
                                {product.product_stock === 0 ? 'Sin Ordenes' : product.product_stock + ' Ordenes'}
                            </span>
                        </div>
                        <div className={nightMode ? 'text-xs text-gray-300 pl-1.5' : 'text-xs text-gray-400 pl-1.5'}>
                            {product.product_price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularServices
