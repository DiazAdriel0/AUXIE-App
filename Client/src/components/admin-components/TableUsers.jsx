import { Card, Typography } from '@material-tailwind/react'
const TableUsers = ({ data }) => {
    const TABLE_HEAD = [
        'Nombre de usuario',
        'Nombre',
        'Apellido',
        data[0]?.isAuxie ? 'Servicio' : 'Edad',
        'Fecha de Inicio',
        '',
    ]

    return (
        <>
            <Card className='w-full h-[45rem]'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={index}
                                    className='border-b border-blue-gray-100 bg-blue-gray-50 p-4 min-w-[5rem] max-w-[5rem]'
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
                        {data.map(({ username, firstName, lastName, services, registerDate, age, id }) => (
                            <tr key={id} className=' even:bg-blue-gray-50/50'>
                                <td className='p-4 max-w-[5rem]'>
                                    <Typography variant='small' color='blue-gray' className='flex font-normal'>
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
                                        {services
                                            ? services.length === 0
                                                ? 'Sin Servicios'
                                                : services.map(service => service.name).join(', ')
                                            : age}
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
