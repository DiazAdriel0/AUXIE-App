import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../../redux/actions/actions'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './ProfileConsumers.module.scss'
import Swal from 'sweetalert2'
import { TextField } from '@mui/material'
import ResetPassword from '../../reset-password/ResetPassword'

const ProfileConsumers = () => {
    const user = useSelector(state => state.loggedUser)
    const consumer = useSelector(state => state.loggedUser)
    const [newImage, setNewImage] = useState(null)
    const [error, setError] = useState(null)
    const [profileData, setProfileData] = useState({})
    const [edit, setEdit] = useState(false)
    const [password, setPasswords] = useState(false)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [provinces, setProvinces] = useState('')
    const [country, setCountry] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const handleEdit = () => {
        setEdit(true)
        if (edit === true) {
            setEdit(false)
        }
    }
    const handlePassword = () => {
        setPasswords(true)
        if (password === true) {
            setPasswords(false)
        }
    }
    const dispatch = useDispatch()

    const registerDate = consumer.registerDate
    const luxonDate = DateTime.fromISO(registerDate)
    const toDateMed = luxonDate.toLocaleString(DateTime.DATE_MED)

    const handleImageChange = event => {
        const fileInput = event.target.files[0]
        if (fileInput && (fileInput.type === 'image/jpeg' || fileInput.type === 'image/png')) {
            setNewImage(fileInput)
            setError(null)
        } else {
            setError('Por favor, selecciona un archivo PNG o JPG.')
        }
    }
    ///put de datos ///
    const handleChange = event => {
        const { name, value } = event.target
        setProfileData(previousValue => ({ ...previousValue, [name]: value }))
    }
    const handleAddressChange = event => {
        const { name, value } = event.target
        if (name === 'street') {
            setAddress(value)
        } else if (name === 'province') {
            setProvinces(value)
        } else if (name === 'country') {
            setCountry(value)
        } else if (name === 'city') {
            setCity(value)
        }
    }
    useEffect(() => {
        // Concatenate the address, province, and country
        const newFullAddress = `${address} ${city} ${provinces} ${country}`
        setFullAddress(newFullAddress)
    }, [address, provinces, country])
  
    ///put de datos ///
    const handleUpdateProfile = () => {
        setEdit(false)
        const formData = new FormData()
        formData.append('image', newImage)

        dispatch(
            updateProfile(
                { id: consumer.id, image: newImage, ...profileData, address: fullAddress },

                'consumers'
            )
        )

        Swal.fire('Datos actualizados exitosamente!')
    }

    // const favNames = consumer.favoritesProviders
    //     .map((favorite) => favorite.firstName)
    //     .join(' | ')

    // const requiredServicesNames = consumer.requiredServices
    //     ?.map((service) => service.service)
    //     .join(' | ')
    // const requiredServicesNamesSet = new Set(requiredServicesNames)

    return (
        <div>
            <div>
                <NavGeneral />
            </div>
            <div className={style.fullProfileContainer}>
                <div className={style.profileContainer}>
                    <div className={style.secondcontainer}>
                        <button type='button' className={style.edit} onClick={handleEdit}>
                            Editar perfil
                        </button>
                        <div className={style.datejoined}> Te uniste: {toDateMed}</div>

                        <div className={style.imagecontainer}>
                            <img src={consumer.image?.secure_url} alt='imagen de perfil' />
                        </div>
                        {edit && (
                            <input
                                type='file'
                                accept='.jpg, .png'
                                onChange={handleImageChange}
                                className={style.imageButton}
                            />
                        )}

                        <h1 className={style.name}>
                            {consumer.firstName} {consumer.lastName}
                        </h1>

                        {edit && (
                            <TextField
                                className={style.picker}
                                id='outlined-basic'
                                label='Nombre'
                                variant='outlined'
                                color='primary'
                                name='firstName'
                                value={profileData.firstName}
                                onChange={handleChange}
                                sx={{ marginLeft: 22, backgroundColor: ' #6d6c6c5d' }}
                                focused
                            />
                        )}
                        {edit && (
                            <TextField
                                className={style.picker}
                                id='outlined-basic'
                                label='Apellido'
                                variant='outlined'
                                color='primary'
                                name='lastName'
                                value={profileData.lastName}
                                onChange={handleChange}
                                focused
                                sx={{ marginLeft: 5, backgroundColor: ' #6d6c6c5d' }}
                            />
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <h4>
                            {consumer.isAdmin && (
                                <div>
                                    <h4>Admin</h4>
                                </div>
                            )}
                        </h4>
                        <h4>Género: {consumer.gender}</h4>
                        {edit && (
                            <select onChange={handleChange} name='gender' defaultValue={''}>
                                <option disabled value=''>
                                    Género
                                </option>
                                <option value='Masculino'>Masculino</option>
                                <option value='Femenino'>Femenino</option>
                                <option value='Otro'>Otro</option>
                            </select>
                        )}
                        <div className={style.emailpassword}>
                            <h3>
                                Email: {consumer.email}{' '}
                                {edit && <button onClick={handlePassword}>Cambiar la contraseña</button>}
                                {password && <ResetPassword />}
                            </h3>
                        </div>
                        <div className={style.address}>
                            <h3>Tu Direccion</h3>
                            {!edit && <p>{user.address}</p>}
                            {edit && (
                                <TextField
                                    className={style.picker}
                                    id='outlined-basic'
                                    label='Calle y numero'
                                    variant='outlined'
                                    required
                                    multiline
                                    color='primary'
                                    name='street'
                                    value={address}
                                    onChange={handleAddressChange}
                                    focused
                                    sx={{ width: 150, margin: 1, backgroundColor: ' #6d6c6c5d' }}
                                />
                            )}
                            {edit && (
                                <TextField
                                    className={style.picker}
                                    id='outlined-basic'
                                    label='ciudad'
                                    variant='outlined'
                                    color='primary'
                                    name='city'
                                    value={city}
                                    onChange={handleAddressChange}
                                    focused
                                    sx={{ width: 150, margin: 1, backgroundColor: ' #6d6c6c5d' }}
                                />
                            )}
                            {edit && (
                                <TextField
                                    className={style.picker}
                                    id='outlined-basic'
                                    label='Provincia'
                                    variant='outlined'
                                    color='primary'
                                    name='province'
                                    value={provinces}
                                    onChange={handleAddressChange}
                                    focused
                                    sx={{ width: 150, margin: 1, backgroundColor: ' #6d6c6c5d' }}
                                />
                            )}

                            {edit && (
                                <TextField
                                    className={style.picker}
                                    id='outlined-basic'
                                    label='pais'
                                    variant='outlined'
                                    color='primary'
                                    name='country'
                                    value={country}
                                    onChange={handleAddressChange}
                                    focused
                                    sx={{ width: 150, margin: 1, backgroundColor: ' #6d6c6c5d' }}
                                />
                            )}
                        </div>
                        <div className={style.savebutton}>
                            {edit && <button onClick={handleUpdateProfile}>Guardar Cambios</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileConsumers
