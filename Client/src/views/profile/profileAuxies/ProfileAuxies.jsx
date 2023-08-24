import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './ProfileAuxies.module.scss'
import axios from 'axios'
import { loggedUser } from '../../../redux/actions/actions'

import ResetPassword from '../../reset-password/ResetPassword'
import { TextField } from '@mui/material'

const ProfileAuxies = () => {
    const provider = useSelector(state => state.loggedUser)
    const offer = useSelector(state => state.loggedUser.services)
    const allServices = useSelector(state => state.services)
    const [change, setChange] = useState(false)
    const [serviceUpdate, setServiceUpdate] = useState({
        providerId: provider.id,
        services: [...provider.services],
    })
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [provinces, setProvinces] = useState('')
    const [country, setCountry] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newlastName, setNewlastName] = useState('')
    const [newfirstName, setNewfirstName] = useState('')
    const [newBio, setNewBio] = useState(provider.bio)
    const [error, setError] = useState(null)
    const [gallery, setGallery] = useState([])
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [password, setPasswords] = useState(false)
    const registerDate = provider.registerDate
    const luxonDate = DateTime.fromISO(registerDate)
    const toDateMed = luxonDate.toLocaleString(DateTime.DATE_MED)

    const handleRefresh = async () => {
        try {
            const response = await axios.get(`/providers/${provider.id}`)
            if (response) {
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        handleRefresh()
    }, [])
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
    const handleImageChange = event => {
        const fileInput = event.target.files[0]
        if (fileInput && (fileInput.type === 'image/jpeg' || fileInput.type === 'image/png')) {
            setNewImage(fileInput)
            setError(null)
        } else {
            setError('Por favor, selecciona un archivo PNG o JPG.')
        }
        setChange(true)
    }

    function handleSelect(e) {
        const selectedService = e.target.value
        const selectedServiceId = allServices.find(service => service.name === selectedService)?._id

        if (e.target.checked) {
            // If the checkbox is checked, add the selected service to the services array.
            setServiceUpdate(prevServiceUpdate => ({
                ...prevServiceUpdate,
                services: [
                    ...prevServiceUpdate.services,
                    {
                        name: selectedService,
                        id: selectedServiceId,
                        price: getPriceForService(selectedService),
                    },
                ],
            }))
        } else {
            // If the checkbox is unchecked, remove the selected service from the services array.
            setServiceUpdate(prevServiceUpdate => ({
                ...prevServiceUpdate,
                services: prevServiceUpdate.services.filter(service => service.name !== selectedService),
            }))
        }
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
        setChange(true)
    }
    useEffect(() => {
        // Concatenate the address, province, and country
        const newFullAddress = `${address} ${city} ${provinces} ${country}`
        setFullAddress(newFullAddress)
    }, [address, provinces, country])
  
    function handlePriceChange(e, serviceName) {
        const newPrice = parseFloat(e.target.value)

        setServiceUpdate(previousValue => ({
            ...previousValue,
            services: previousValue.services.map(service =>
                service.name === serviceName ? { ...service, price: newPrice } : service
            ),
        }))
    }

    function getPriceForService(serviceName) {
        const selectedService = serviceUpdate.services.find(service => service.name === serviceName)
        return selectedService ? parseFloat(selectedService.price) : 0
    }

    const handleBioChange = e => {
        setNewBio(e.target.value)
        setChange(true)
    }
    const handlefirstname = e => {
        setNewfirstName(e.target.value)
        setChange(true)
    }
    const handleLastname = e => {
        setNewlastName(e.target.value)
        setChange(true)
    }
    const handleAddPhoto = event => {
        const newPhotos = [...gallery, event.target.files[0]]
        if (newPhotos.length <= 5) {
            setGallery(newPhotos)
        }
        setChange(true)
    }

    const handleRemovePhoto = index => {
        const newPhotos = gallery.filter((_, i) => i !== index)
        setGallery(newPhotos)
    }
    const handlePut = async () => {
        try {
            const response = await axios.put(`/providers/services`, serviceUpdate)
            if (response) {
                // Swal.fire('Gracias por tu opinion!')
                navigate('/profile')
            }
        } catch (error) {
            console.error(error + error.response)

            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: error.response,
            //     footer: '<a href="">¿Por qué está pasando esto?</a>',
            // })
        }
    }
    const handleUpdateProfile = () => {
        handlePut()
        const formData = new FormData()
        formData.append('image', newImage)
        formData.append('bio', newBio)
        formData.append('gallery', gallery)

        if (change) {
            dispatch(
                updateProfile(
                    {
                        id: provider.id,
                        providerId: provider.id, //pa los servicios
                        image: newImage,
                        bio: newBio,
                        gallery: gallery,
                        firstName: newfirstName,
                        lastName: newlastName,
                        ...serviceUpdate,
                        address: fullAddress,
                    },

                    'providers'
                )
            )
        }
    }

    return (
        <>
            <NavGeneral />
            <div className={style.fullProfileContainer}>
                <div className={style.profilecontainer}>
                    <div className={style.secondcontainer}>
                        <button type='button' className={style.edit} onClick={handleEdit}>
                            Editar perfil
                        </button>
                        <h6>Te uniste: {toDateMed}</h6>
                        <div>
                            <img src={provider.image.secure_url} alt='imagen de perfil' />
                            {edit && <input type='file' accept='.jpg, .png' onChange={handleImageChange} />}
                            <h1>
                                {provider.firstName} {provider.lastName}
                            </h1>
                            {edit && (
                                <TextField
                                    className={style.picker}
                                    id='outlined-basic'
                                    label='Nombre'
                                    variant='outlined'
                                    required
                                    multiline
                                    color='primary'
                                    name='firstName'
                                    value={newfirstName}
                                    onChange={handlefirstname}
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
                                    required
                                    multiline
                                    color='primary'
                                    name='lastName'
                                    value={newlastName}
                                    onChange={handleLastname}
                                    focused
                                    sx={{ marginLeft: 5, backgroundColor: ' #6d6c6c5d' }}
                                />
                            )}
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <h4>Género: {provider.gender}</h4>
                            <h3>
                                Email: {provider.email}{' '}
                                {edit && <button onClick={handlePassword}>Cambiar la contraseña</button>}
                                {password && <ResetPassword />}
                            </h3>
                            <h3>Descripción:</h3>
                            <div >
                            {' '}
                            <TextField
                            multiline
                            fullWidth
                            rows={3}
                            value={newBio}
                            onChange={handleBioChange}
                        />
                                
                    
                            </div>

                            <div>
                                <h5>
                                    Servicios que ofrece:
                                    {!edit &&
                                        offer.map(service => (
                                            <label key={service.name} className={style.offerlabel}>
                                                {' '}
                                                {service.name}{' '}
                                            </label>
                                        ))}{' '}
                                </h5>

                                {edit && (
                                    <center>
                                        <div className={style.typechecksContainer}>
                                            <div className={style.typechecks}>
                                                {allServices.map(service => (
                                                    <label key={service.name} className={style.servicelabel}>
                                                        <input
                                                            type='checkbox'
                                                            value={service.name}
                                                            checked={serviceUpdate.services.some(
                                                                selectedService => selectedService.name === service.name
                                                            )}
                                                            onChange={e => handleSelect(e)}
                                                        />
                                                        <div className={style.checkmark}></div>
                                                        {service.name}
                                                        {serviceUpdate.services.some(
                                                            selectedService => selectedService.name === service.name
                                                        ) ? (
                                                            <div className={style.priceContainer}>
                                                                {' '}
                                                                <input
                                                                    type='number'
                                                                    placeholder='Tarifa del servicio'
                                                                    value={getPriceForService(service.name)}
                                                                    onChange={e => handlePriceChange(e, service.name)}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className={style.priceContainer}></div>
                                                        )}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </center>
                                )}
                                <h5>Trabajos realizados: </h5>
                                <h5>Calificaciones: </h5>
                                <h5>Calificación Promedio: {provider.averageRating}</h5>
                                <h5>Reseñas:</h5>
                            </div>
                            <div className='gallery-container'>
                                <h5>Fotos de tus trabajos realizados:</h5>
                                {edit && <input type='file' accept='.jpg, .png' multiple onChange={handleAddPhoto} />}
                                <ul>
                                    {gallery.map((photo, index) => (
                                        <li className='gallery-item' key={index}>
                                            <img src={URL.createObjectURL(photo)} alt={`Photo ${index}`} />
                                            <button className='delete-button' onClick={() => handleRemovePhoto(index)}>
                                                X
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.address}>
                                <h3>Tu Direccion</h3>
                                {!edit && <p>{provider.address}</p>}
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
                                        sx={{ width: 150, margin: 1, backgroundColor: ' #6d6c6c5d' }}
                                        focused
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
                                        sx={{ width: 150, margin: 1 }}
                                        focused
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
                                        sx={{ width: 150, margin: 1 }}
                                        focused
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
                                        sx={{ width: 150, margin: 1 }}
                                        focused
                                    />
                                )}
                            </div>
                            {edit && (
                                <button className={style.updatebutton} onClick={handleUpdateProfile}>
                                    Guardar Cambios
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAuxies
