const TABLE_HEAD = ['Nombre', 'Apellido', 'Servicio', 'Fecha de Inicio', '']
import { Card, Typography } from '@material-tailwind/react'
const TableUsers = ({ data }) => {
    return (
        <>
            <Card className='w-full h-[50rem]'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                        <tr>
                            {TABLE_HEAD.map(head => (
                                <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
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
                        {data.map(({ username, firstName, lastName, services, registerDate }) => (
                            <tr key={username} className='even:bg-blue-gray-50/50'>
                                <td className='p-4 max-w-[5rem]'>
                                    <Typography variant='small' color='blue-gray' className='font-normal'>
                                        {username}
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
                                        {services.length === 0
                                            ? 'Sin Servicios'
                                            : services.map(service => service.name).join(', ')}
                                    </Typography>
                                </td>
                                <td className='p-4 max-w-[5rem]'>
                                    <Typography variant='small' color='blue-gray' className='font-normal'>
                                        {registerDate}
                                    </Typography>
                                </td>

                                <td className='p-4 max-w-[5rem]'>
                                    <Typography variant='small' color='blue-gray' className='font-medium'>
                                        Eliminar
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>{' '}
        </>
    )
}

export default TableUsers
