import { IoBagHandle } from 'react-icons/io5'
const DashboardStatsGrid = () => {
    return (
        <div className=' flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Ventas Totales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$5132.21</strong>
                        <span className='text-sm text-green-500 pl-2'>+1123</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Ventas Totales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$18925.32</strong>
                        <span className='text-sm text-green-500 pl-2'>+2254</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Ventas Totales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$12,000.54</strong>
                        <span className='text-sm text-green-500 pl-2'>+1543</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Ventas Totales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$32,521.12</strong>
                        <span className='text-sm text-red-500 pl-2'>-2544</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}

export default DashboardStatsGrid
