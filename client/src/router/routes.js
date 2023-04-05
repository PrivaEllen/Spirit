import { MAIN, LOGIN, REGISTRATION, CREATE_TEST, TEST_SET} from './utils';
import Land from '../pages/landing';
import Login from '../pages/PageLogin'
import Registration from '../pages/PageRegistration';
import TestCreate from '../pages/TestCreate';
import TestSet from '../pages/PageTestSet'


export const loginRoutes = [
    //{
    //    path: TEST_SET,
    //    Component: TestSet
    //}
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
    }
]