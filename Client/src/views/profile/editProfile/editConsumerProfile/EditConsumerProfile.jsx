import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../../../redux/actions/actions'
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import style from './editConsumerProfile.module.scss'
import { TextField } from '@mui/material'
import ResetPassword from '../../../reset-password/ResetPassword'
import { useNavigate } from 'react-router-dom'

const EditConsumerProfile = () => {
    const consumer = useSelector(state => state.loggedUser)
    const navigate = useNavigate()
    const [newImage, setNewImage] = useState(null)
    const [error, setError] = useState(null)
    const [profileData, setProfileData] = useState({
        firstName: consumer.firstName,
        lastName: consumer.lastName,
    })
    const [password, setPasswords] = useState(false)
    const [address, setAddress] = useState(consumer?.address.split(',')[0])
    const [city, setCity] = useState(consumer?.address.split(',')[1])
    const [provinces, setProvinces] = useState(consumer?.address.split(',')[2])
    const [country, setCountry] = useState(consumer?.address.split(',')[3])
    const [fullAddress, setFullAddress] = useState(consumer?.address)

    const handlePassword = () => {
        setPasswords(true)
        if (password === true) {
            setPasswords(false)
        }
    }
    const dispatch = useDispatch()

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
        const newFullAddress = `${address},${city}, ${provinces}, ${country}`
        setFullAddress(newFullAddress)
    }, [address, provinces, country])
    useEffect(() => {}, [fullAddress])
    ///put de datos ///
    const handleUpdateProfile = () => {
        const formData = new FormData()
        formData.append('image', newImage)
        dispatch(updateProfile({ id: consumer.id, image: newImage, ...profileData, address: fullAddress }, 'consumers'))
        navigate('/profile')
    }
    useEffect(()=> {
        if (consumer.isAuxie) return navigate('/editauxieprofile')
    },[])
    return (
        <div>
            <div>
                <NavGeneral />
            </div>
            <div className={style.fullProfileContainer}>
                <div className={style.profileContainer}>
                    <div className={style.title}>
                        <h1>Editar perfil</h1>
                    </div>

                    <div className={style.secondContainer}>
                        <div className={style.editImageContainer}>
                            <div className={style.imageContainer}>
                                <img src={consumer.image?.secure_url} alt='imagen de perfil' />
                            </div>
                            <div className={style.imageInput}>
                                <input
                                    type='file'
                                    accept='.jpg, .png'
                                    onChange={handleImageChange}
                                    className={style.imageButton}
                                />
                            </div>
                        </div>

                        <div className={style.inputs}>
                            <TextField
                                className={style.picker}
                                id='outlined-basic'
                                label='Nombre'
                                variant='outlined'
                                color='primary'
                                name='firstName'
                                value={profileData.firstName}
                                onChange={handleChange}
                                sx={{ backgroundColor: ' #6d6c6c5d' }}
                                focused
                            />
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
                                sx={{ backgroundColor: ' #6d6c6c5d' }}
                            />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <h4>
                                {consumer.isAdmin && (
                                    <div>
                                        <h4>Admin</h4>
                                    </div>
                                )}
                            </h4>
                            <p>Género: </p>
                            <select onChange={handleChange} name='gender' defaultValue={consumer.gender}>
                                <option disabled value=''>
                                    Género
                                </option>
                                <option value='Masculino'>Masculino</option>
                                <option value='Femenino'>Femenino</option>
                                <option value='Otro'>Otro</option>
                            </select>
                            <div className={style.emailpassword}>
                                <h3>
                                    <p>Email: </p>
                                    {consumer.email}
                                    <button onClick={handlePassword}>Cambiar la contraseña</button>
                                    {password && <ResetPassword />}
                                </h3>
                            </div>
                            <div className={style.address}>
                                <h3>Tu Direccion</h3>
                                <p>{consumer.address}</p>
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
                            </div>
                            <div className={style.savebutton}>
                                <button onClick={handleUpdateProfile}>Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditConsumerProfile
