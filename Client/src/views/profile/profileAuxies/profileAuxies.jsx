import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProfileAuxies = () => {
    const dispatch = useDispatch
    const provider = useSelector((state) => state.loggedUser)
    const [newImage, setNewImage] = useState('')
    const [error, setError] = useState(null)
    const [newBio, setNewBio] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files[0]
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
        dispatch(
            updateUserProfile(provider.id, { image: newImage, bio: newBio })
        )
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
                <h1>
                    {provider.firstName} {provider.lastName}
                </h1>
                <h4>Gender: {provider.gender}</h4>
                <h3>
                    Email: {provider.email} <button>Cambiar contraseña</button>
                </h3>
                <textarea value={newBio} onChange={handleBioChange} />
                <button onClick={handleUpdateProfile}>Guardar Cambios</button>
                <h6>Te uniste: {provider.registerDate}</h6>
                <div>
                    <h5>Servicios que ofrece:</h5>
                    <h5>Trabajos realizados: </h5>
                    <h5>Rating: </h5>
                    <h5>Average Rating: {provider.averageRating}</h5>
                    <h5>Reviews:</h5>
                </div>
            </div>
        </div>
    )
}
export default ProfileAuxies
