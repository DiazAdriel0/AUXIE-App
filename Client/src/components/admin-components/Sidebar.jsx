import { FcBullish } from 'react-icons/fc'

const Sidebar = () => {
    return (
        <div className='bg-neutral-900 w-60 p-3 flex flex-col h-screen text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span className='text-neutral-100 text-lg'>Auxie</span>
            </div>
            <div className='flex-1'></div>
            <div>Bottom Part</div>
        </div>
    )
}

export default Sidebar
