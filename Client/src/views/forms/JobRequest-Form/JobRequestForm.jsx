import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
const JobRequestForm = () => {

  return (

//pasar por param id de auxie y por body "service name" (mapeado de servicios) "description" "client id" 
<div>
    <div>JobRequestForm</div>

    <div>
    <DatePicker />
    </div>
    <div>.</div>
    <div>
    <TimePicker/>
    </div>
    </div>
  )
}

export default JobRequestForm