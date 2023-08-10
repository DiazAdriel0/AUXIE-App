

const ClientRequiredService = (job) => {
   const {providerName, serviceName, status, jobDate, price} = job
  return (
    <div>
        {providerName}
        {serviceName}
        {jobDate}
        {price}
        {status}
    </div>
  )
}

export default ClientRequiredService