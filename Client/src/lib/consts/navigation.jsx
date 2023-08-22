import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />,
    },
    {
        key: 'auxies',
        label: 'Auxies',
        path: '/dashboard/auxies',
        icon: <HiOutlineCube />,
    },

    {
        key: 'customers',
        label: 'Clientes',
        path: '/dashboard/clientes',
        icon: <HiOutlineUsers />,
    },
    {
        key: 'services',
        label: 'Servicios',
        path: '/dashboard/servicios',
        icon: <HiOutlineShoppingCart />,
    },
    {
        key: 'transactions',
        label: 'Transacciones',
        path: '/dashboard/transacciones',
        icon: <HiOutlineDocumentText />,
    },

    {
        key: 'notificaciones',
        label: 'notificaciones',
        path: '/dashboard/notificaciones',
        icon: <HiOutlineAnnotation />,
    },
    {
        key: 'reclamos',
        label: 'reclamos',
        path: '/dashboard/claims',
        icon: <HiOutlineAnnotation />,
    },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'configuración',
        label: 'Configuración',
        path: '/dashboard/configuracion',
        icon: <HiOutlineCog />,
    },
    {
        key: 'ayuda',
        label: 'Ayuda & Soporte',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />,
    },
]
