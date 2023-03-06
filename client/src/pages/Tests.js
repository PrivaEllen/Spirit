import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN } from "../router/utils";

function Tests() {
    return (
        <div>
            Test Page. Create own test!
            <NavLink to={LOGIN}>
                <Button>Start</Button>
            </NavLink>
        </div>
    )
}

export default Tests;