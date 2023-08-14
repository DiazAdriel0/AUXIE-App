import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'

const ClientRequiredService = (job) => {
   const {id, service, requestDate, description, status, jobDate, price, paymentMethod} = job
   const mercadoPago = paymentMethod === 'app' ? true : false
  //  const approved = status === 'approved' ? true : false
  return (
    <div>
        {id}
        {requestDate}
        {description}
        {service}
        {jobDate}
        {price}
        {status}
        {mercadoPago ? (<ButtonMercadoPago price={price} description={service} quantity={1}/>) : null}
    </div>
  )
}

export default ClientRequiredService