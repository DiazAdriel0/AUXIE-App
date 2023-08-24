import CircleIconAuxie from '../../assets/logos/CircleIconAuxie.png'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
import { Place } from '@mui/icons-material'
import { useSelector } from 'react-redux'
const Footer = ({ myRef3 }) => {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <footer ref={myRef3} className={nightMode ? 'w-full bg-rgb(10,11,37) p-8' : 'w-full bg-white p-8'}>
            <hr className='my-8 border-blue-gray-50' />
            <div
                className={
                    nightMode
                        ? 'flex items-center justify-between gap-y-6 gap-x-12 bg-rgb(10,11,37) text-center '
                        : 'flex items-center justify-between gap-y-6 gap-x-12 bg-white text-center '
                }
            >
                <img src={CircleIconAuxie} alt='logo-ct' className='w-[150px]' />
                <ul className='flex items-center gap-y-2 gap-x-8'>
                    <Link to={'/aboutUs'}>
                        <li>
                            <Typography
                                color='blue-gray'
                                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                            >
                                Sobre nosotros
                            </Typography>
                        </li>
                    </Link>
                    <Link to={'/guarantee'}>
                        <li>
                            <Typography
                                color='blue-gray'
                                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                            >
                                Garantías
                            </Typography>
                        </li>
                    </Link>
                    <Link to='/help'>
                        <li>
                            <Typography
                                color='blue-gray'
                                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                            >
                                Como funciona
                            </Typography>
                        </li>
                    </Link>
                    <Link to='/support'>
                        <li>
                            <Typography
                                color='blue-gray'
                                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                            >
                                Contacto
                            </Typography>
                        </li>
                    </Link>
                </ul>
                <div className='flex flex-column justify-center text-center font-normal'>
                    <Place />
                    <label>Argentina</label>

                    <Place />
                    <label>México</label>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <Typography color='blue-gray' className='text-center font-normal '>
                    &copy; 2023 Auxie
                </Typography>
            </div>
        </footer>
    )
}

export default Footer
