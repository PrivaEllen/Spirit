import { MAIN, LOGIN, REGISTRATION, GET_TEST, CREATE_TEST, TEST_SET, TEST_FOR_CLIENT, TEMPLATE, STATS} from './utils';
import Land from '../pages/landing';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import TestCreate from '../pages/TestCreate';
import TestSet from '../pages/PageTestSet';
import TestClient from '../pages/TestForClient';
import TestTemplate from '../pages/TestTemplate';
import Statistics from '../pages/Statistics'

export const loginRoutes = [
    {
       path: TEST_SET,
       Component: TestSet
    },
    {
        path: CREATE_TEST,
        Component: TestCreate
    },
    {
        path: GET_TEST + '/:testId',
        Component: TestCreate
    },
    {
        path: TEST_FOR_CLIENT+'/:testId'+'/:internId' ,
        Component: TestClient
    },
    {
        path: TEMPLATE+'/:testId',
        Component: TestTemplate
    }
]

export const publicRoutes = [
    {
        path: MAIN,
        Component: Land
    },
    {
        path: REGISTRATION,
        Component: Registration
    },
    {
        path: LOGIN,
        Component: Login
    },
    {
        path: STATS,
        Component: Statistics
    },
]