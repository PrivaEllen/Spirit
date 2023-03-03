import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN } from "../router/utils";

export default function TestCreate() {
    return (
        <div>
            Main Page
            <NavLink to={LOGIN}>
                <Button>Start</Button>
            </NavLink>
        </div>
    )
}