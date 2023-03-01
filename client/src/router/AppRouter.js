import React, { useContext } from "react";
import { Routes, Route, useInRouterContext } from 'react-router-dom';
import { Context } from '../index'
import {loginRoutes, publicRoutes} from './routes';

export default function AppRouter () {
    const {user} = useContext(Context)
    console.log(user)
    console.log("ПРИВЕТ ДАРОВА")
    return (
        <Routes>
            {user._isAuth == true && loginRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
        </Routes>
    );
};
