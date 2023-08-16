import { useState } from 'react'
import { DateTime } from 'luxon'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import style from './ProfileAuxies.module.scss'
import axios from 'axios'
const ProfileAuxies = () => {
    const provider = useSelector((state) => state.loggedUser)
    const allServices = useSelector((state) => state.services)
    const [change,setChange] = useState(false)
    const [serviceUpdate, setServiceUpdate] = useState({
        providerId:provider.id,
        services: [...provider.services],
    })
    const [newImage, setNewImage] = useState('')
    const [newBio, setNewBio] = useState(provider.bio)
    const [error, setError] = useState(null)
    const [gallery, setGallery] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerDate = provider.registerDate
    const luxonDate = DateTime.fromISO(registerDate)
    const toDateMed = luxonDate.toLocaleString(DateTime.DATE_MED)

    console.log(serviceUpdate)
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
        setChange(true)
    }

    function handleSelect(e) {
        const selectedService = e.target.value;
        const selectedServiceId = allServices.find(service => service.name === selectedService)?._id;
        
        if (e.target.checked) {
            // If the checkbox is checked, add the selected service to the services array.
            setServiceUpdate(prevServiceUpdate => ({
                ...prevServiceUpdate,
                services: [
                    ...prevServiceUpdate.services,
                    { name: selectedService, id: selectedServiceId, price: getPriceForService(selectedService) },
                ],
            }));
        } else {
            // If the checkbox is unchecked, remove the selected service from the services array.
            setServiceUpdate(prevServiceUpdate => ({
                ...prevServiceUpdate,
                services: prevServiceUpdate.services.filter(service => service.name !== selectedService),
            }));
        }
    }
    
    function handlePriceChange(e, serviceName) {
        const newPrice = parseFloat(e.target.value);
      
        setServiceUpdate((previousValue) => ({
            ...previousValue,
            services: previousValue.services.map((service) =>
                service.name === serviceName ? { ...service, price: newPrice } : service
            ),
        }));
    }
    
    function getPriceForService(serviceName) {
        const selectedService = serviceUpdate.services.find((service) => service.name === serviceName);
        return selectedService ? parseFloat(selectedService.price) : 0;
    }

    const handleBioChange = (e) => {
        setNewBio(e.target.value)
        setChange(true)
    }

    const handleAddPhoto = (event) => {
        console.log(event.target.files)
        const newPhotos = [...gallery, event.target.files[0]]
        if (newPhotos.length <= 5) {
            setGallery(newPhotos)
        }
        setChange(true)
    }

    const handleRemovePhoto = (index) => {
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
            console.log(error + error.response)

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
console.log(formData.bio)
       if(change){ dispatch(
            
            updateProfile(
                {
                    id: provider.id,
                    providerId: provider.id, //pa los servicios
                    image: newImage,
                    bio: newBio,
                    gallery: gallery,
                    ...serviceUpdate,
                },

                'providers'
            )
        )}
    }
   
    return (
        <>
            <NavGeneral />
            <div className={style.profilecontainer}>
                <div>
                    <h1>
                        {provider.firstName} {provider.lastName}
                    </h1>
                    <img
                        src={provider.image.secure_url}
                        alt="imagen de perfil"
                    />
                    <input
                        type="file"
                        accept=".jpg, .png"
                        onChange={handleImageChange}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <h4>Genero: {provider.gender}</h4>
                    <h3>
                        Email: {provider.email}{' '}
                        <button onClick={() => navigate('/resetpassword')}>
                            Cambiar contraseña
                        </button>
                    </h3>
                    <h3>Descripción:</h3>
                    <textarea value={newBio} onChange={handleBioChange} />
                    <h6>Te uniste: {toDateMed}</h6>
                    <div>
                        <h5>Servicios que ofrece:</h5>
                        <div className={style.typechecks}>
                            {allServices.map((service) => (
                                <label key={service.name} className={style.servicelabel}>
                                    <input
                                        type="checkbox"
                                        value={service.name}
                                        checked={serviceUpdate.services.some(
                                            (selectedService) =>
                                                selectedService.name ===
                                                service.name
                                        )}
                                        onChange={(e) => handleSelect(e)}
                                    />
                                    {service.name}
                                    {serviceUpdate.services.some(
                                            (selectedService) =>
                                                selectedService.name ===
                                                service.name
                                        ) && <input
                                        type='number'
                                        placeholder='Tarifa del servicio'
                                        value={getPriceForService(service.name)}
                                        onChange={(e) => handlePriceChange(e, service.name)}
                                    />} 
                                </label>
                                
                            ))}
                        </div>
                        <h5>Trabajos realizados: </h5>
                        <h5>Rating: </h5>
                        <h5>Average Rating: {provider.averageRating}</h5>
                        <h5>Reviews:</h5>
                    </div>
                    <div className="gallery-container">
                        <h5>Fotos de tus trabajos realizados:</h5>
                        <input
                            type="file"
                            accept=".jpg, .png"
                            multiple
                            onChange={handleAddPhoto}
                        />
                        <ul>
                            {gallery.map((photo, index) => (
                                <li className="gallery-item" key={index}>
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt={`Photo ${index}`}
                                    />
                                    <button
                                        className="delete-button"
                                        onClick={() => handleRemovePhoto(index)}
                                    >
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className={style.updatebutton}
                        onClick={handleUpdateProfile}
                    >
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProfileAuxies
