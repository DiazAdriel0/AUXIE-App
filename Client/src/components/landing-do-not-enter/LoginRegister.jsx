import * as Components from './Components'
import React, { useEffect, useState } from 'react'
import { useValidations } from '../../utils/validationutils'
import axios from 'axios'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggedUser, updateProfile } from '../../redux/actions/actions'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase-config'
import Swal from 'sweetalert2'
import style from './loginregister.module.scss'
import { CircularProgress } from '@mui/material'
function LoginRegister() {
    const [signIn, toggle] = useState(true)
    const {
        Container,
        SignUpContainer,
        Input,
        Form,
        Title,
        Button,
        SignInContainer,
        Anchor,
        Paragraph,
        GhostButton,
        OverlayContainer,
        Overlay,
        LeftOverlayPanel,
        RightOverlayPanel,
    } = Components

    ///LOGIN ///
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { errors, validate } = useValidations()
    const [access, setAccess] = useState(false) //eslint-disable-line
    const [loading, setLoading] = useState(false)
    const correo = 'auxieapp@gmail.com'
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const logged = useSelector(state => state.loggedUser)
    const handleChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        ///validations ///
        validate(
            {
                ...input,
                [event.target.name]: event.target.value,
            },
            event.target.name
        )
        ///validations ///
    }
    const handleLogin = async input => {
        try {
            const {data} = await axios.post('/consumers/login', input)
            if(data){
                if (data.isActive) {
                  setAccess(true)
                  dispatch(loggedUser(data))
                  const form = document.getElementById('form')
                  form.reset()
              }else{
                  return Swal.fire({
                      icon: 'error',
                      title: 'Tu cuenta ha sido suspendida.',
                      html: `<p>Para más información, contactate con <a style="color: black;" href="mailto:${correo}">${correo}</a>.</p>`,
                    })
              }  
            }
        } catch (error) {
            console.error('error: ' + error.message)
            Swal.fire(error.message)
        }
    }

    useEffect(() => {
        if (access === true) {
            if (logged?.isAdmin) {
                navigate('/dashboard')
            } else {
                navigate('/homeconsumer')
                let welcome
                switch (logged.gender) {
                    case 'Masculino':
                        welcome = 'Bienvenido'
                        break
                    case 'Femenino':
                        welcome = 'Bienvenida'
                        break
                    case 'Otro':
                        welcome = 'Bienvenide'
                        break
                    default:
                        welcome = 'Hola'
                        break
                }
                let timerInterval
                Swal.fire({
                    title: `${welcome} ${logged.firstName}`,
                    html: '<b></b>', // Set the HTML to be blank
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {}, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    },
                })

                // eslint-disable-next-line no-prototype-builtins
                if (logged.hasOwnProperty('firstName')) {
                    if (!logged?.userUid) {
                        dispatch(updateProfile({ userUid: auth.currentUser.uid, id: logged.id }, 'consumers'))
                    }
                }
            }
        }
    }, [access])

    const handleSubmit = async e => {
        e.preventDefault()

       
        const email = input.email
        const password = input.password
        
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            if (credential) {
                handleLogin(input)
            }
            const form = document.getElementById('form')
            form.reset()
        } catch (error) {
            Swal.fire(error.message)
        }
    }

    //////para desabilitar el boton si no esta lleno el formulario=>
    const buttonDisabled = () => {
        if (
            signUp.password.trim().length === 0 ||
            signUp.email.trim().length === 0 ||
            signUp.firstName.trim().length === 0 ||
            signUp.lastName.trim().length === 0 ||
            signUp.age.trim().length === 0 ||
            signUp.username.trim().length === 0 ||
            signUp.gender.trim().length === 0
        ) {
            return true
        }

        for (let error in errors) {
            if (errors[error] !== '') {
                return true
            }
        }

        return false
    }

    //google Login
    const signInGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            provider.setCustomParameters({ prompt: 'select_account' })
            const credential = await signInWithPopup(auth, provider)
            const email = credential.user.email
            const googleId = credential.user.uid

            if (credential) {
                const data = {
                    email: email,
                    password: {
                        googleId: `${googleId}`,
                        name: `${credential.user.displayName}`,
                        picture: `${credential.user.photoURL}`,
                    },
                }
                handleLogin(data)
            }
        } catch (error) {
            Swal.fire(error.message)
        }
    }
    ///LOGIN ///
    ///SIGN UP///
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        username: '',
        age: 0,
        email: '',
        password: '',
        gender: '',
        userUid: '',
    })

    const handleSignUpChange = event => {
        setSignUp({
            ...signUp,
            [event.target.name]: event.target.value,
        })
        validate(
            {
                ...signUp,
                [event.target.name]: event.target.value,
            },
            event.target.name
        )
    }
    const handlePost = async signUp => {

        try {
            const response = await axios.post('/consumers/', signUp)
            if (response) {
                setLoading(false)
                let welcome
                switch (signUp.gender) {
                    case 'Masculino':
                        welcome = 'Bienvenido'
                        break
                    case 'Femenino':
                        welcome = 'Bienvenida'
                        break
                    case 'Otro':
                        welcome = 'Bienvenide'
                        break
                    default:
                        welcome = 'Bienvenidx'
                }

                // Reset the form only on successful response (2xx)
                const form = document.getElementById('form')
                Swal.fire(`Usuario creado con exito. ¡${welcome} a Auxie! Inicia sesión para continuar.`)
                form.reset()
            }

            // navigate('/home')
        } catch (error) {
            setLoading(false)
            let er = error.response.data.error
            console.error(er)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${er}`,
                footer: '<a href="">Why do I have this issue?</a>',
            })
        }
    }
    const handleRegisterSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            const credential = await createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
            const uid = credential.user.uid
            let data = {}
            if (credential) {
                data = {
                    ...signUp,
                    userUid: uid,
                }
            }
            handlePost(data)
        } catch (error) {
            setLoading(false)
            console.error(error.message)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que el correo proporcionado ya está en uso.',
            })
        }
    }

    return (
        <div>
              
        <div>
          
            <Container className={style.container}>
                <SignUpContainer signingin={signIn}>
                    <Form id='form'>
                        <Title>Registrarse</Title>
                        <Input type='text' placeholder='Nombre' name='firstName' onChange={handleSignUpChange} />

                        <div className={style.errors}>
                            <p>{errors.firstName}</p>
                        </div>
                        <Input type='text' placeholder='Apellido' name='lastName' onChange={handleSignUpChange} />
                        <div className={style.errors}>
                            <p>{errors.lastName}</p>
                        </div>
                        <Input type='number' placeholder='Edad' name='age' onChange={handleSignUpChange} />
                        <div className={style.errors}>
                            <p>{errors.age}</p>
                        </div>
                        <Input type='text' placeholder='Usuario' name='username' onChange={handleSignUpChange} />
                        <div className={style.errors}></div>
                        <Input type='email' placeholder='Email' name='email' onChange={handleSignUpChange} />
                        <div className={style.errors}>
                            <p>{errors.email}</p>
                        </div>
                        <Input type='password' placeholder='contraseña' name='password' onChange={handleSignUpChange} />
                        <div className={style.errors}>
                            <p>{errors.password}</p>
                        </div>
                        <select onChange={handleSignUpChange} name='gender' defaultValue={''}>
                            <option disabled value=''>
                                Género
                            </option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Femenino'>Femenino</option>
                            <option value='Otro'>Otro</option>
                        </select>
                        
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Button onClick={handleRegisterSubmit} className={style.sendbutton }disabled={buttonDisabled()}>Registrarse</Button>
                        
                    )}
                     
                    </Form>
                </SignUpContainer>
                <SignInContainer signingin={signIn}>
                    <Form onSubmit={handleSubmit} id='form'>
                        <Title>Iniciar Sesión</Title>
                        <Input type='email' placeholder='Email' name='email' onChange={handleChange} />
                        <div className={style.errors}>
                            <p>{errors.email}</p>
                        </div>
                        <Input type='password' placeholder='Password' name='password' onChange={handleChange} />
                        <div className={style.errors}>
                           
                        </div>
                        <Link to={('/resetpassword')}>
                        <Anchor href='#'>¿Olvidaste tu contraseña?</Anchor>
                        </Link>

                        <Button className={style.sendbutton}>Inicia Sesión</Button>
                    </Form>
                </SignInContainer>
                <OverlayContainer signingin={signIn}>
                    <Overlay signingin={signIn}>
                        <LeftOverlayPanel signingin={signIn}>
                            <Title>¡Bienvenido!</Title>
                            <Paragraph>¡Inicia sesión ahora para acceder a Auxie!</Paragraph>
                            <GhostButton onClick={() => toggle(true)} className={style.sendbutton}>Inicia Sesión</GhostButton>
                        </LeftOverlayPanel>
                        <RightOverlayPanel signingin={signIn}>
                            <Title>¡Bienvenido!</Title>
                            <Paragraph>Completa el formulario para crear tu cuenta</Paragraph>
                            <GhostButton className={style.sendbutton} onClick={() => toggle(false)}>Registrarse</GhostButton>
                        </RightOverlayPanel>
                    </Overlay>
                </OverlayContainer>
            </Container>
            <center>
                <button className={style.googlebutton} onClick={signInGoogle}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        preserveAspectRatio='xMidYMid'
                        viewBox='0 0 256 262'
                        width='20'
                        height='25'
                    >
                        <path
                            fill='#4285F4'
                            d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
                        ></path>
                        <path
                            fill='#34A853'
                            d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
                        ></path>
                        <path
                            fill='#FBBC05'
                            d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
                        ></path>
                        <path
                            fill='#EB4335'
                            d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
                        ></path>
                    </svg>
                    {''}
                    <p>Continúa con Google</p>
                </button>
            </center>
        </div>
        </div>
    )
}

export default LoginRegister
