import { useSelector, useDispatch } from 'react-redux'

import AsideAuxie from '../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import NavGeneral from '../../../components/nav-general/NavGeneral'

import axios from 'axios'
import { useEffect } from 'react'
import { loggedUser } from '../../../redux/actions/actions'

import useNotify from './../../../hooks/useNotify'

const HomeAuxie = () => {
    const logged = useSelector(state => state.loggedUser)
    const { sendNotification } = useNotify(logged.userUid)
    const lastJobs = logged.reviews?.slice(0, 4)
    const payment = logged.jobs?.slice(0, 4)
    const nightMode = useSelector(state => state.nightMode)

    const { services } = logged
    const dispatch = useDispatch()
    const handleRefresh = async () => {
        try {
            const response = await axios.get(`/providers/${logged.id}`)
            if (response) {
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        let welcome
        switch (logged.gender) {
            case 'Masculino':
                welcome = 'Bienvenido'
                break
            case 'Femenino':
                welcome = 'Bienvenida'
                break
            case 'Otro':
                welcome = 'Bienvenide'
                break
            default:
                welcome = 'Bienvenidx'
        }
        if (logged.firstLogin) {
            sendNotification(`${welcome} a Auxie ${logged.firstName}, ingresa a tu perfil para modificar tu biografía`)
            axios.put('/providers/firstLogin', { id: logged.id })
        }
        handleRefresh()
    }, [])

    return (
        <div>
            <header className='h-16'>
                <NavGeneral />
            </header>
            <div className='flex'>
                <aside
                    className={
                        nightMode
                            ? ' bg-div-color-dark  text-color-dark border-2 border-div-color-dark-600 w-[12.5rem] pl-12'
                            : 'text-color-light border-2 border-div-text-color-light-900 w-[12.5rem] pl-12 bg-[#d6d6d6]'
                    }
                >
                    <div className=' h-screen flex flex-col justify-between'>
                        <AsideAuxie />
                    </div>
                </aside>
                <div className='grid grid-cols-2 '>
                    {/* Main */}
                    <main
                        className={
                            nightMode
                                ? 'lg: text-color-dark p-4 pl-8 w-fit h-fit xl:text-color-dark p-4 pl-8 w-fit h-fit'
                                : 'lg: text-color-light py-4 pl-8 w-fit xl: text-color-light p-4 pl-8 w-fit h-max '
                        }
                    >
                        <div>
                            <h3>Servicios</h3>
                            <div className='grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-10 px-4'>
                            {services ? (
    services.map(service => (
        <div
            className={`relative h-44 w-48 p-4 ${
                nightMode ? 'bg-div-color-dark text-color-light' : 'bg-card-background-light text-color-dark'
            } group transition-transform transform-gpu hover:scale-105 rounded-lg`}
            key={service.name}
        >
            {/* Front side */}
            <div className={`front-side flex flex-col justify-center items-center`}>
                <div className="group-hover:hidden text-center flex flex-col items-center h-full justify-center">
                    <p className="mt-10">Nombre:</p>
                    <h4 className={nightMode ? 'rounded-lg p-2 text-center' : 'rounded-lg p-2 text-center'}>{service.name}</h4>
                </div>
            </div>

            {/* Back side (hidden by default, shown on hover) */}
            <div className={`back-side absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center`}>
                <p className="mb-1">Tarifa:</p>
                <h4>{service.price}</h4>
            </div>
        </div>
    ))
) : (
    <p>No ofrece servicios</p>
)}
                            </div>
                        </div>
                    </main>
                    <div
                        className={
                            nightMode
                                ? 'lg:bg-div-color-dark px-4  border-2 border-div-text-color-light-900 xl:bg-div-color-dark px-4 pb-2   border-2 border-div-text-color-light-900 w-[42rem] h-fit -ml-28'
                                : 'lg:bg-div-text-color-light px-4 border-2 border-div-text-color-light-900 pb-2 , xl:bg-div-text-color-light  pb-2 border-2 border-div-text-color-light-900 w-[42rem] h-fit -ml-28'
                        }
                    >
                        <h3 className='mb-4 text-color-light'>Pagos</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark  px-14 border border-gray-300 '
                                                : ' px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Trabajos
                                    </th>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark  px-14 border border-gray-300 '
                                                : ' px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Precio
                                    </th>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark  px-14 border border-gray-300  '
                                                : ' px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Forma de Pago
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {payment?.map((service, index) => (
                                    <tr key={index}>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark  py-1 px-14 border border-gray-300  '
                                                    : 'py-1 px-14 border border-gray-300 bg-gray-100 '
                                            }
                                        >
                                            {service.service}
                                        </td>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-1  px-14 border border-gray-300 '
                                                    : 'py-1 px-14 border border-gray-300 bg-gray-100 '
                                            }
                                        >
                                            {service.price}
                                        </td>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-1 px-14 border border-gray-300 '
                                                    : 'py-1 px-14 border border-gray-300 bg-gray-100 '
                                            }
                                        >
                                            {service.paymentMethod}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <p className='w-full ml-20'>Calificación de los ultimos servicios</p>
                        <table className='mx-auto border-collapse ml-20'>
                            <thead>
                                <tr>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark py-2 px-14 border border-gray-300 '
                                                : 'py-2 px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Servicio
                                    </th>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark py-2 px-32 border border-gray-300 '
                                                : 'py-2 px-32 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Reseña
                                    </th>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark py-2 px-14 border border-gray-300 '
                                                : 'py-2 px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Calificación
                                    </th>
                                    <th
                                        className={
                                            nightMode
                                                ? 'bg-div-color-dark py-2 px-14 border border-gray-300 '
                                                : 'py-2 px-14 border border-gray-300 bg-gray-100 '
                                        }
                                    >
                                        Contratante
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {lastJobs?.map((review, index) => (
                                    <tr key={index}>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-2 px-4 border border-gray-300  '
                                                    : 'py-2 px-4 border border-gray-300 bg-gray-100  '
                                            }
                                        >
                                            {review.service}
                                        </td>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-2 px-4 border border-gray-300 '
                                                    : 'py-2 px-4 border border-gray-300 bg-gray-100  '
                                            }
                                        >
                                            {review.review}
                                        </td>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-2 px-4 border border-gray-300  '
                                                    : 'py-2 px-4 border border-gray-300 bg-gray-100  '
                                            }
                                        >
                                            {review.score}
                                        </td>
                                        <td
                                            className={
                                                nightMode
                                                    ? 'bg-div-color-dark py-2 px-4 border border-gray-300   '
                                                    : 'py-2 px-4 border border-gray-300 bg-gray-100  '
                                            }
                                        >
                                            {review.username}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAuxie
