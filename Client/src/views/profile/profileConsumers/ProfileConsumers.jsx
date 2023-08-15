import { useState } from 'react'
import { DateTime } from 'luxon'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import ClientRequiredServices from '../../../components/clientRequiredServices/ClientRequiredServices'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './ProfileConsumers.module.scss'
import Swal from 'sweetalert2'
import { TextField } from '@mui/material'


const ProfileConsumers = () => {
    const consumer = useSelector((state) => state.loggedUser)
    const [newImage, setNewImage] = useState(null)
    const [error, setError] = useState(null)
    const [profileData, setProfileData] = useState({
       

    })
    const [edit,setEdit]= useState(false);
    const handleEdit = ()=>{
        setEdit(true);
        if(edit === true){
            setEdit(false);
        }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerDate = consumer.registerDate
    const luxonDate = DateTime.fromISO(registerDate)
    const toDateMed = luxonDate.toLocaleString(DateTime.DATE_MED)

    const handleImageChange = (event) => {
        const fileInput = event.target.files[0]
        if (
            fileInput &&
            (fileInput.type === 'image/jpeg' || fileInput.type === 'image/png')
        ) {
            setNewImage(fileInput)
            setError(null)
        } else {
            setError('Por favor, selecciona un archivo PNG o JPG.')
        }
    }
///put de datos /// 
const handleChange = (event) => {
    const { name, value } = event.target
    setProfileData((previousValue) => ({ ...previousValue, [name]: value }))
    
}


///put de datos /// 
    const handleUpdateProfile = () => {
        setEdit(false)
        const formData = new FormData()
        formData.append('image', newImage)
       
        dispatch(
            updateProfile(
                { id: consumer.id, image: newImage,...profileData},

                'consumers'
            )
        )
      
        Swal.fire('Datos actualizados exitosamente!')
    }

    const favNames = consumer.favoritesProviders
        .map((favorite) => favorite.firstName)
        .join(' | ')

    const requiredServicesNames = consumer.requiredServices
        .map((service) => service.service)
        .join(' | ')
    const requiredServicesNamesSet = new Set(requiredServicesNames)
    console.log(profileData)
    return (
        <>
        <div><NavGeneral /></div>
        
        <div className={style.profileContainer}>
            <div className={style.secondcontainer}>
                <button type='button' className={style.edit} onClick={handleEdit}>Editar perfil</button>
                <h1 className={style.name}>
                    {consumer.firstName} {consumer.lastName}
                </h1>
                {edit && <TextField
                            className={style.picker}
                            id="outlined-basic"
                            label="Nombre"
                            variant="outlined"
                            required
                            multiline
                            color="primary"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleChange}
                        />}
                         {edit && <TextField
                            className={style.picker}
                            id="outlined-basic"
                            label="Apellido"
                            variant="outlined"
                            required
                            multiline
                            color="primary"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleChange}
                        />}
                <div className={style.imagecontainer}>
                <img src={consumer.image.secure_url} alt="imagen de perfil" />
                </div>
               {edit && <input
                    type="file"
                    accept=".jpg, .png"
                    onChange={handleImageChange}
                    className={style.imageButton}
                />}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <h4>
                    {consumer.isAdmin && (
                        <div>
                            <h4>Admin</h4>
                        </div>
                    )}
                </h4>
                <h4>Genero: {consumer.gender}</h4>
                
               { edit && <select
                        onChange={handleChange}
                        name="gender"
                        defaultValue={''}
                    >
                        <option disabled value="">
                            Genero
                        </option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>}
                <div className={style.emailpassword}>
                    <h3>
                        Email: {consumer.email}{' '}
                       {edit && <button onClick={() => navigate('/resetpassword')}>
                            Cambiar la contraseña
                        </button>}
                    </h3>
                </div>
                <h6>Te uniste: {toDateMed}</h6>
                <div>
                    <h5>Auxies favoritos: {favNames}</h5>
                    <h5>Servicios contratados: {requiredServicesNamesSet}</h5>
                    <div className={style.tablecontainer}>
                    <h5>
                        Servicios requeridos:
                        {consumer.requiredServices.length && (
                            <ClientRequiredServices />
                        )}
                    </h5>
                    </div>
                    <h5>Average Rating: {consumer.averageRating}</h5>
                    <h5>Ratings: {consumer.ratings}</h5>
                </div>
                <div className={style.savebutton}>
                    <button onClick={handleUpdateProfile}>
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileConsumers
