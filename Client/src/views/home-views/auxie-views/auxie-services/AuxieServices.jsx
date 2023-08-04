import style from './auxieServices.module.scss'

import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'

const AuxieServices = () => {
    const data = [
        {
            id: 1,
            name: 'Servicio 1',
            category: 'Descripción del servicio 1',
            status: 'pending',
            price: 1500,
        },
        {
            id: 2,
            name: 'Servicio 2',
            category: 'Descripción del servicio 2',
            status: 'pending',
            price: 1500,
        },
        {
            id: 3,
            name: 'Servicio 3',
            category: 'Descripción del servicio 3',
            status: 'pending',
            price: 1500,
        },
        {
            id: 4,
            name: 'Servicio 4',
            category: 'Descripción del servicio 4',
            status: 'pending',
            price: 1500,
        },
        {
            id: 5,
            name: 'Servicio 5',
            category: 'Descripción del servicio 5',
            status: 'pending',
            price: 1500,
        },
        {
            id: 6,
            name: 'Servicio 6',
            category: 'Descripción del servicio 6',
            status: 'pending',
            price: 1500,
        },
        {
            id: 7,
            name: 'Servicio 7',
            category: 'Descripción del servicio 7',
            status: 'pending',
            price: 1500,
        },
        {
            id: 8,
            name: 'Servicio 8',
            category: 'Descripción del servicio 8',
            status: 'pending',
            price: 1500,
        },
        {
            id: 9,
            name: 'Servicio 9',
            category: 'Descripción del servicio 9',
            status: 'pending',
            price: 1500,
        },
        {
            id: 10,
            name: 'Servicio 10',
            category: 'Descripción del servicio 10',
            status: 'pending',
            price: 1500,
        },
        {
            id: 11,
            name: 'Servicio 11',
            category: 'Descripción del servicio 11',
            status: 'pending',
            price: 1500,
        },
        {
            id: 12,
            name: 'Servicio 12',
            category: 'Descripción del servicio 12',
            status: 'pending',
            price: 1500,
        },
    ]

    return (
        <div className={style.services}>
            <header className={style.header}>Auxie Services</header>
            <AsideAuxie />
            <main className={style.main}>
                <table className={style.servicesTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Servicios</th>
                            <th>Categoria</th>
                            <th>Estado</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((service) => (
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.name}</td>
                                <td>{service.category}</td>
                                <td>{service.status}</td>
                                <td>{service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default AuxieServices
