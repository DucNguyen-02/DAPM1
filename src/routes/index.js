import Home from '../pages/Home'
import UpdateAccUser from '../pages/UpdateAccUser'
import ChangePassword from '../pages/ChangePassword'
import Statistic from '../pages/Statistic'
import SearchInfo from '../pages/SearchInfo'

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
]

export { publicRoutes }
