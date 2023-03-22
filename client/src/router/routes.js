<<<<<<< HEAD
import { MAIN, LOGIN, REGISTRATION, TESTS, CREATE_TEST, TEST_SET} from './utils';
=======
import { MAIN, LOGIN, REGISTRATION, TESTS, CREATE_TEST } from './utils';
>>>>>>> 49680596ae04d2742e66cd65416620bf69d676a6
import Land from '../pages/landing';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import Tests from '../pages/Tests';
import TestCreate from '../pages/TestCreate';
import TestSet from '../pages/PageTestSet'


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
]