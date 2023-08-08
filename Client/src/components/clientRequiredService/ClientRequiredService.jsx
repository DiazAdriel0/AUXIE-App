

const ClientRequiredService = (job) => {
   const {firstName, lastName, name, status} = job
  return (
    <div>
        {firstName}
        {lastName}
        {name}
        {status}
    </div>
  )
}

export default ClientRequiredService