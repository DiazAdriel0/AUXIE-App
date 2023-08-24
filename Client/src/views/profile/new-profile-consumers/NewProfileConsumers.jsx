import { useSelector } from 'react-redux'
import NavGeneral from '../../../components/nav-general/NavGeneral'

function formatISOStringToReadable(isoString) {
    const date = new Date(isoString)
    const year = date.getFullYear()
    const month = date.toLocaleString('default', { month: 'long' })
    const day = date.getDate()

    const formattedDate = `${day} de ${month} de ${year}`
    return formattedDate
}

const NewProfileConsumers = () => {
    const logged = useSelector(state => state.loggedUser)
    const { firstName, lastName, image, requiredServices, email, registerDate, favoritesProviders } = logged

    console.log(logged)
    console.log(image.secure_url)

    const totalServices = requiredServices.length
    const favorites = favoritesProviders.length
    const fechaTransformada = formatISOStringToReadable(registerDate)

    return (
        <>
            <NavGeneral />
            <main className='flex h-[93vh] bg-div-color-dark'>
                <div className='absolute top-[25%] left-[8.4rem] '>
                    <img className='rounded-[50%] w-[500px] h-[500px]' src={image.secure_url} alt='Profile Image' />
                </div>
                {/* Vista Izquierda */}
                <div className='gradient-to-br from-blue-100 to-blue-800 p-8 h-[93vh] w-96'></div>
                {/* Vista derecha */}
                <div className='bg-gray-50 h-full flex-1  '>
                    {/* Container vista derecha */}
                    <div className='h-full flex flex-col justify-start gap-[8rem] items-center'>
                        {/* Button editar */}
                        <div className='flex justify-end w-full mr-16 mt-8'>
                            <button className='bg-black text-white  p-2 rounded-md'>Editar</button>
                        </div>
                        {/* Container info usuario */}
                        <div className='flex flex-col justify-start  gap-16'>
                            <h3 className='text-[2rem] border-t-4 border-blue-600'>Información personal</h3>
                            <ul className='flex flex-col  gap-8 text-xl'>
                                <li>
                                    <span className='font-semibold'>{`Nombre : `}</span>
                                    <span>{`${firstName} ${lastName}`}</span>
                                </li>

                                <li>
                                    <span className='font-semibold'>{`Email : `}</span>
                                    <span>{email}</span>
                                </li>
                                <li>
                                    <span className='font-semibold'>{`Dirección : `}</span>
                                    <span>{email}</span>
                                </li>
                                <li>
                                    <span className='font-semibold'>{`Servicios contratados : `}</span>
                                    <span>{totalServices}</span>
                                </li>
                                <li>
                                    <span className='font-semibold'>{`Servicios favoritos : `}</span>
                                    <span>{favorites}</span>
                                </li>
                                <li>
                                    <span className='font-semibold'>{`Fecha de registro : `}</span>
                                    <span>{fechaTransformada}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NewProfileConsumers
