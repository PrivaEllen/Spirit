import { Button } from "@mui/material";
import React, { useContext } from "react";
import { LOGIN, TESTS } from "../router/utils";
import { observer } from "mobx-react-lite";
import { Context } from "..";


function Main() {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <h1 style={{color: 'beige'}}>Main</h1>
            <Button variant='text' size='small' sx={{ textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(user._isAuth ? TESTS : LOGIN)}>Start</Button>
            
        </div>
    )//
}

export default observer(Main)