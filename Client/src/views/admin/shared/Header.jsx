import { Fragment } from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Menu, Popover, Transition } from '@headlessui/react'

//firebase
import { auth } from '../../../config/firebase-config'
import { signOut } from 'firebase/auth'
//actions
import { logOut } from '../../../redux/actions/actions'

import Swal from 'sweetalert2'
import axios from 'axios'
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const userImage = user.image?.secure_url
    const handleLogOut = async () => {
        try {
            if (user.googleId) {
                const response = await axios.post('/consumers/logout', {
                    googleId: `${user.googleId}`,
                })
                if (response) {
                    await signOut(auth)
                    dispatch(logOut({}))
                    return navigate('/')
                }
            }
            dispatch(logOut({}))
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.error('error: ' + error.message)
            Swal.fire(error.message)
        }
    }
    return (
        <div className=' h-16 flex justify-between items-center  w-full'>
            <div className='relative'>
                <HiOutlineSearch
                    fontSize={20}
                    className='text-gray-400 absolute top-1/2 -translate-y-1/2 -translate-y-1/2 left-3'
                />
                <input
                    type='text'
                    placeholder='Buscar...'
                    className='text-sm focus:outline-none text-black active:outline:none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11'
                />
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className='relative'>
                    {() => (
                        <>
                            <Popover.Button style={{ all: 'unset', cursor: 'pointer' }}>
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0 translate-y-1'
                                enterTo='opacity-100 translate-y-0'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100 translate-y-0'
                                leaveTo='opacity-0 translate-y-1'
                            >
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Mensajes</strong>
                                        <div className='mt-2 py-1 text-sm'>Este es el panel de mensajes</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className='relative'>
                    {() => (
                        <>
                            <Popover.Button style={{ all: 'unset', cursor: 'pointer' }}>
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0 translate-y-1'
                                enterTo='opacity-100 translate-y-0'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100 translate-y-0'
                                leaveTo='opacity-0 translate-y-1'
                            >
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Notificaciones</strong>
                                        <div className='mt-2 py-1 text-sm'>Este es el panel de notificaciones</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as='div' className='relative '>
                    <div>
                        <Menu.Button style={{ all: 'unset', cursor: 'pointer' }}>
                            <span className='sr-only'>Open user menu</span>
                            <div
                                className='h-10 w-10  rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                                style={{
                                    backgroundImage: `url(${userImage})`,
                                }}
                            >
                                <span className='sr-only'>Nombre Apellido</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-md shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none'>
                            <div className=''>
                                <Menu.Item>
                                    {({ active }) => (
                                        <>
                                            <div
                                                className={classNames(
                                                    active && 'bg-gray-100',
                                                    'hover:bg-gray-100   text-gray-700 focus:bg-gray-800 cursor-pointer round-sm px-4 py-2'
                                                )}
                                                onClick={() => navigate('/profile')}
                                            >
                                                Tu perfil
                                            </div>

                                            <div
                                                className={classNames(
                                                    active && 'bg-gray-700',
                                                    'hover:bg-gray-100   text-gray-700 focus:bg-gray-800 cursor-pointer round-sm px-4 py-2'
                                                )}
                                                onClick={() => navigate('/configuracion')}
                                            >
                                                Configuraciones
                                            </div>

                                            <div
                                                className={classNames(
                                                    active && 'bg-gray-700',
                                                    'hover:bg-gray-100   text-gray-700 focus:bg-gray-800 cursor-pointer round-sm px-4 py-2'
                                                )}
                                                onClick={() => handleLogOut()}
                                            >
                                                Desconectarse
                                            </div>
                                        </>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
export default Header
