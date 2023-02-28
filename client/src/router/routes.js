import { MAIN, LOGIN, REGISTRATION} from './utils';
import Main from '../pages/Main';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';

export const loginRoutes = [
    {
        path: MAIN,
        Component: Main
    },
    {
        path: REGISTRATION,
        Component: Registration
    },
    {
        path: LOGIN,
        Component: Login
    }
]

export const publicRoutes = [
    {
        path: MAIN,
        Component: Main
    },
    {
        path: REGISTRATION,
        Component: Registration
    },
    {
        path: LOGIN,
        Component: Login
    }
]