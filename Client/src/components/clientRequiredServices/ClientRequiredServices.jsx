import { useSelector } from "react-redux"
import style from './clientRequiredServices'
import ClientRequiredService from "../clientRequiredService/clientRequiredService"

const clientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
  return (
    <>
    <div className={style.clientServices}>
    {client.requiredServices.length > 0 && client.requiredServices.map(service => {
        <ClientRequiredService firstName={service.firstName} lastName={service.lastName} name={service.name} status={service.status}/>
    })}
    </div>
    </>
  )
}

export default clientRequiredServices