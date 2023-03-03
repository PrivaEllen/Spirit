import {MAIN, LOGIN, REGISTRATION, CREATE_TEST} from './utils';
import Main from '../pages/Main';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import TestCreate from '../pages/TestCreate';

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
    },
    // Этот роут должен быть непубличным!
    {
        path: CREATE_TEST,
        Component: TestCreate
    },
]