
import { MAIN, LOGIN, REGISTRATION, TESTS, CREATE_TEST, TEST_SET, TEST_FOR_CLIENT} from './utils';
import Land from '../pages/landing';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import Tests from '../pages/Tests';
import TestCreate from '../pages/TestCreate';
import TestSet from '../pages/PageTestSet';
import TestClient from '../pages/TestForClient';

export const loginRoutes = [
    {
        path: TESTS,
        Component: Tests
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
    // Этот роут должен быть непубличным!
    {
        path: CREATE_TEST,
        Component: TestCreate
    },
    {
       path: TEST_SET,
       Component: TestSet
    },
    {
        path: TEST_FOR_CLIENT,
        Component: TestClient
    },
]