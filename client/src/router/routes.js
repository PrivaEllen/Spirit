import { MAIN, LOGIN, REGISTRATION, TESTS} from './utils';
import Main from '../pages/Main';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import Tests from '../pages/Tests';

export const loginRoutes = [
    {
        path: TESTS,
        Component: Tests
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
    },
]