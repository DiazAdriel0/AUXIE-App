import style from './tableServices.module.scss'
import usePagination from '../../pagination/usePagination'
const TableServices = ({ data }) => {
    const { currentPageData } = usePagination(15, data)

    return (
        <table className={style.servicesTable}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Trabajos</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {currentPageData.map((service) => (
                    <tr key={service.id}>
                        <td>{service.id}</td>
                        <td>{service.name}</td>
                        <td>{service.trabajo}</td>
                        <td>{service.status}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableServices
