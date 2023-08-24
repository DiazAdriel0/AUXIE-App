import { Card, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const TableUsers = ({ data }) => {
    const nightMode = useSelector(state => state.nightMode)
    const TABLE_HEAD = [
        'Nombre de usuario',
        'Nombre',
        'Apellido',
        data[0]?.isAuxie ? 'Servicio' : 'Edad',
        'Fecha de Inicio',
        '',
    ]

    const handleDelete = async (isAuxie, id) => {
        try {
            isAuxie ? await axios.delete(`/providers/${id}`) : await axios.delete(`/consumers/${id}`)
            alert('Usuario eliminado')
        } catch (error) {
            console.error(error)
        }
    }

    const handleRestore = async (isAuxie, id) => {
        try {
            isAuxie ? await axios.put(`/providers/restore/${id}`) : await axios.put(`/consumers/restore/${id}`)
            alert('Usuario restaurado')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='w-full h-11/12 pt-8 flex items-center justify-center'>
            <Card className={nightMode ? 'text-white bg-neutral-800 w-[99%] h-[45rem]' : 'w-[99%] h-[45rem]'}>
                <table
                    className={
                        nightMode
                            ? 'w-full min-w-max table-auto text-left bg-neutral-800'
                            : 'w-full min-w-max table-auto text-left'
                    }
                >
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={index}
                                    className={
                                        nightMode
                                            ? 'border-b border-blue-gray-100 bg-blue-gray-50 p-4 min-w-[5rem] max-w-[5rem]'
                                            : ' border-b border-blue-gray-800 bg-blue-gray-800 p-4 min-w-[5rem] max-w-[5rem]'
                                    }
                                >
                                    <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal leading-none opacity-70'
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            ({ username, firstName, lastName, services, registerDate, age, id, isAuxie, isActive }) => (
                                <tr key={id} className=' even:bg-blue-gray-50/50'>
                                    <td className='p-4 max-w-[5rem]'>
                                        <Typography variant='small' color='blue-gray' className='flex font-normal'>
                                            {username ? username : 'Sin Usuario'}
                                        </Typography>
                                    </td>
                                    <td className='p-4 max-w-[5rem]'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>
                                            {firstName}
                                        </Typography>
                                    </td>
                                    <td className='p-4 max-w-[5rem]'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>
                                            {lastName}
                                        </Typography>
                                    </td>
                                    <td className='p-4 max-w-[5rem]'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>
                                            {services
                                                ? services.length === 0
                                                    ? 'Sin Servicios'
                                                    : services.map(service => service.name).join(', ')
                                                : age
                                                ? age
                                                : 'Sin Edad'}
                                        </Typography>
                                    </td>
                                    <td className='p-4 max-w-[5rem]'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>
                                            {registerDate}
                                        </Typography>
                                    </td>

                                    <td className='p-4 max-w-[5rem]'>
                                        {isActive ? (
                                            <button onClick={() => handleDelete(isAuxie, id)}>Eliminar</button>
                                        ) : (
                                            <button onClick={() => handleRestore(isAuxie, id)}>Restaurar</button>
                                        )}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default TableUsers
