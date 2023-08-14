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

const Detail = () => {
    const user = useSelector((state)=>state.loggedUser)
    
    const [isInChat, setIsInChat] = useState(false)

    const [auxieDetails, setAuxieDetails] = useState({})
    let { id } = useParams()

    useEffect(() => {
        const getDetails = async function () {
            const res = await axios.get(`/providers/${id}`)

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
                name: `${user.firstName} ${user.lastName}`
            },
        })
    }

    console.log(auth.currentUser)
    return (
        <>
            <NavGeneral />
            <Link to="/homeconsumer">
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
                                        alt="imagen de perfil"
                                        height="100px"
                                        width="100px"
                                    />
                                </div>
                                <div className={style.info}>
                                    <div className={style.name}>
                                        <p>{auxieDetails.firstName}</p>
                                        <p>{auxieDetails.lastName}</p>
                                    </div>
                                    <div className={style.rating}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={style.star}
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="#ffec00"
                                            fill="#ffec00"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="#000"
                                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                                fill="none"
                                                strokeWidth="4px"
                                            />
                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                        </svg>
                                        <p>{auxieDetails.averageRating}</p>
                                    </div>
                                    <p>
                                        ({auxieDetails.reviews.length} Reseñas)
                                    </p>
                                </div>
                                <div className={style.contServices}>
                                    {auxieDetails.services.length > 0 ? (
                                        auxieDetails.services.map((service) => {
                                            return (
                                                <div
                                                    className={style.serviceDiv}
                                                    key={service.price}
                                                >
                                                    <p
                                                        className={
                                                            style.serviceName
                                                        }
                                                    >
                                                        {service.name}
                                                    </p>
                                                    <p>${service.price}/hr.</p>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className={style.noServices}>
                                            <p className={style.serviceName}>
                                                No ofrece servicios
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={style.bio}>
                                <h3>Acerca de mí</h3>
                                <p> {auxieDetails.bio}</p>
                            </div>
                            <div className={style.carousel}>
                                <Carousel>
                                 
                                </Carousel>
                            </div>
                        </div>
                    ) : null}
                </div>
                <JobRequestForm services={auxieDetails.services} />
                {isInChat ? (
                    <Chat
                        recipient={auxieDetails.userUid}
                        auxiedetails={auxieDetails}
                    />
                ) : (
                    <div className={style.chatbutton}>
                    <button onClick={handleClick}>Start Chat</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Detail
