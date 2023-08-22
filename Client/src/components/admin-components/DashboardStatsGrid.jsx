import { IoBagHandle, IoPieChart, IoCart, IoPeople } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { spanStyle, spanStyleNight, strongStyle, strongStyleNight } from '../../lib/consts/styles'
const DashboardStatsGrid = () => {
    const nightMode = useSelector(state => state.nightMode)

    return (
        <div className=' flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className={nightMode ? spanStyleNight : spanStyle}>Ventas del Dia</span>
                    <div className='flex items-center'>
                        <strong className={nightMode ? strongStyleNight : strongStyle}>$5132.21</strong>
                        <span className='text-sm text-green-500 pl-2'>+1123</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
                    <IoPieChart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className={nightMode ? spanStyleNight : spanStyle}>Auxies Nuevos</span>
                    <div className='flex items-center'>
                        <strong className={nightMode ? strongStyleNight : strongStyle}>1532</strong>
                        <span className='text-sm text-green-500 pl-2'>+254</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
                    <IoPeople className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className={nightMode ? spanStyleNight : spanStyle}> Usuarios Nuevos</span>
                    <div className='flex items-center'>
                        <strong className={nightMode ? strongStyleNight : strongStyle}>15320</strong>
                        <span className='text-sm text-green-500 pl-2'>+1543</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
                    <IoCart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className={nightMode ? spanStyleNight : spanStyle}>Ventas Totales</span>
                    <div className='flex items-center'>
                        <strong className={nightMode ? strongStyleNight : strongStyle}>$312,521.12</strong>
                        <span className='text-sm text-red-500 pl-2'>-2544</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <div
            className={
                nightMode
                    ? 'bg-neutral-900 rounded-sm p-4 flex-1  flex items-center'
                    : 'bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'
            }
        >
            {children}
        </div>
    )
}

export default DashboardStatsGrid
