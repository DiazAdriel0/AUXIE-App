import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../redux/Actions/actions'

const ProfileAuxies = () => {
    const provider = useSelector((state) => state.loggedUser)
    const [newImage, setNewImage] = useState('')
    const [newBio, setNewBio] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch

    const handleImageChange = (elem) => {
        const file = elem.target.files[0]
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setNewImage(file)
            setError(null)
        } else {
            setError('Por favor, selecciona un archivo PNG o JPG.')
        }
    }

    const handleBioChange = (e) => {
        setNewBio(e.target.value)
    }

    const handleUpdateProfile = () => {
        const formData = new FormData()
        formData.append('image', newImage)
        formData.append('bio', newBio)
        dispatch( updateProfile({ image: newImage, bio: newBio }, 'consumers'))
    }

    return (
        <div>
            <div>
                <img src={provider.image.secure_url} alt="imagen de perfil" />
                <input
                    type="file"
                    accept=".jpg, .png"
                    onChange={handleImageChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <h1>{provider.firstName} {provider.lastName}</h1>
                <h4>Genero: {provider.gender}</h4>
                <h3>
                    Email: {provider.email}{' '} <button>Cambiar contraseña</button>
                </h3>
                <textarea value={newBio} onChange={handleBioChange} />
                <h6>Te uniste: {provider.registerDate}</h6>
                <div>
                    <h5>Servicios que ofrece:</h5>
                    <h5>Trabajos realizados: </h5>
                    <h5>Rating: </h5>
                    <h5>Average Rating: {provider.averageRating}</h5>
                    <h5>Reviews:</h5>
                </div>
                <button onClick={handleUpdateProfile}>Guardar Cambios</button>
            </div>
        </div>
    )
}
export default ProfileAuxies
