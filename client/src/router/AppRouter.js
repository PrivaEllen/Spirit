import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Context } from '../index'
import {loginRoutes, publicRoutes} from './routes';

function AppRouter () {
    const {user} = useContext(Context)
    console.log(user._isAuth)
    useEffect(() => {
        if (localStorage.getItem('token')){
            console.log(0)
            user.check()
        }
    }, [])
    return (
        <Routes>
            {user._isAuth && loginRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
            
        </Routes>
    );
};

export default observer(AppRouter);
