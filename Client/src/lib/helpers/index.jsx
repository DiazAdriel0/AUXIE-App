export function getOrderStatus(status) {
    switch (status) {
        case 'COBRADO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-gray-500 bg-green-200'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DEVUELTO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-gray-500 bg-orange-200'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'TERMINADO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'CANCELADO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'EN_ESPERA':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DEMORADO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'EN_PROGRESO':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        default:
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100'>
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
    }
}
