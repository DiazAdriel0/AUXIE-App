import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavGeneral from '../../components/nav-general/NavGeneral'
import style from './detail.module.scss'
import JobRequestForm from '../forms/jobRequest-Form/JobRequestForm'
import { Chat } from '../chat/Chat'
import { auth } from '../../config/firebase-config'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useSelector } from 'react-redux'
import Rating from '@mui/material/Rating'
import AuxieReviews from '../../components/auxieReviews/AuxieReviews'

const Detail = () => {
    const user = useSelector(state => state.loggedUser)

    const [isInChat, setIsInChat] = useState(false)

    const [auxieDetails, setAuxieDetails] = useState({})
    const photos = auxieDetails.gallery

    let { id } = useParams()

    useEffect(() => {
        const getDetails = async function () {
            const res = await axios.get(`/providers/${id}`)
            console.log(res.data)

            setAuxieDetails(res.data)
        }
        getDetails()
    }, [])
    const handleClick = async () => {
        setIsInChat(true)

        await axios.put('/providers/inbox/', {
            id,
            inbox: {
                sender: auth.currentUser.uid,
                name: `${user.firstName} ${user.lastName}`,
            },
        })
    }

    return (
        <>
            <NavGeneral />
            <Link to='/homeconsumer'>
                <button>Volver</button>
            </Link>
            <div className={style.detailform}>
                <div className={style.detailall}>
                    {Object.keys(auxieDetails).length > 0 ? (
                        <div className={style.detailCont}>
                            <div className={style.infoCont}>
                                <div className={style.profilePic}>
                                    <img
                                        src={auxieDetails.image.secure_url}
                                        alt='imagen de perfil'
                                        height='100px'
                                        width='100px'
                                    />
                                </div>
                                <div className={style.info}>
                                    <div className={style.name}>
                                        <p>{auxieDetails.firstName}</p>
                                        <p>{auxieDetails.lastName}</p>
                                    </div>
                                    <div className={style.rating}>
                                        <Rating
                                            name='read-only'
                                            value={auxieDetails.averageRating}
                                            readOnly
                                            precision={0.5}
                                        />
                                    </div>
                                    <div className={style.reviews}>
                                    <p>({auxieDetails.reviews.length} Reseñas)</p>
                                    </div>
                                </div>
                                <div className={style.contServices}>
                                    {auxieDetails.services.length > 0 ? (
                                        auxieDetails.services.map((service, index) => {
                                            return (
                                                <div className={style.serviceDiv} key={index}>
                                                    <p className={style.serviceName}>{service.name}</p>
                                                    <p>${service.price}/hr.</p>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className={style.noServices}>
                                            <p className={style.serviceName}>No ofrece servicios</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={style.bio}>
                                <h1>Acerca de mí</h1>
                                <p> {auxieDetails.bio}</p>
                            </div>
                            <div className={style.carousel}>
                                <Carousel
                                    showThumbs={false} // Desactiva las miniaturas (thumbs) si no las necesitas
                                    showIndicators={true} // Muestra los indicadores de las diapositivas
                                    infiniteLoop={true} // Hace que el carousel sea infinito
                                    autoPlay={true} // Activa la reproducción automática
                                    interval={3000} // Intervalo de tiempo en milisegundos entre diapositivas
                                    transitionTime={500}
                                    showStatus={false}
                                >
                                    {photos &&
                                        photos.map(photo => (
                                            <div key={photo.public_id} className={style.carouselItem}>
                                                <img src={photo.secure_url} alt={`Photo ${photo.public_id}`} />
                                            </div>
                                        ))}
                                </Carousel>
                            </div>
                            <div className={style.reviewscontainer}>
                            <h1>Opiniones sobre: {auxieDetails.firstName} {auxieDetails.lastName}</h1>
                            </div>
                            <div className={style.reviewscontainer}>
                                <AuxieReviews services={auxieDetails.reviews} />
                            </div>
                        </div>
                    ) : null}
                </div>
                <JobRequestForm services={auxieDetails.services} recipient={auxieDetails?.userUid} />
                {isInChat ? (
                    <Chat recipient={auxieDetails.userUid} />
                ) : (
                    <div className={style.chatbutton}>
                        <button onClick={handleClick}>Iniciar Chat</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Detail
