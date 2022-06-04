import Home from '../pages/Home'
import UpdateAccUser from '../pages/UpdateAccUser'
import ChangePassword from '../pages/ChangePassword'
import Statistic from '../pages/Statistic'
import SearchInfo from '../pages/SearchInfo'
import Login from '../pages/Login'
import BlankLayout from '../Layouts/BlankLayout'

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/account',
        component: UpdateAccUser,
    },
    {
        path: '/changepassword',
        component: ChangePassword,
    },
    {
        path: '/statistic',
        component: Statistic,
    },
    {
        path: '/searchinfo',
        component: SearchInfo,
    },
    {
        path: '/login',
        component: Login,
        layout: BlankLayout,
    },
]

export { publicRoutes }
