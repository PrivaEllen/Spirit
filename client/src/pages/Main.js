import { Button } from "@mui/material";
import React from "react";
import Lheader from '../components/lending/Lheader'
import Infotext_1 from "../components/lending/Infotext_1";
import Buy_pictures from "../components/lending/Buy_pictures";
import Infotext_2 from "../components/lending/Infotext_2";
import { NavLink } from "react-router-dom";
import { LOGIN } from "../router/utils";

export default function Main() {
    return (
        <div>
            <h1 style={{color: 'beige'}}>Main</h1>
            <Button variant='text' size='small' sx={{ textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(LOGIN)}>Start</Button>
            {/* <Lheader />
            <Infotext_1 />
            <Buy_pictures />
            <Infotext_2 /> */}
        </div>
    )
}