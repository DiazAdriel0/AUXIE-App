import { IoBagHandle, IoPieChart, IoCart, IoPeople } from 'react-icons/io5'
const DashboardStatsGrid = () => {
    return (
        <div className=' flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Pagos del día</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$3132.21</strong>
                        <span className='text-sm text-green-500 pl-2'>+1153</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
                    <IoPieChart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Visitas nuevas</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>1532</strong>
                        <span className='text-sm text-green-500 pl-2'>+254</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
                    <IoPeople className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Reservas nuevas</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>1001</strong>
                        <span className='text-sm text-green-500 pl-2'>+150</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
                    <IoCart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Ventas totales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$312,521.12</strong>
                        <span className='text-sm text-green-500 pl-2'>+2544</span>
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
