import React, {useContext, useEffect} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/login/Header";
import SlidePictures from "../components/login/SlidePictures";
import Enter from "../components/login/Enter";
import { observer } from "mobx-react-lite";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Login() {
    return (
        <>
            <div className='container'>
                <ThemeProvider theme={darkTheme}>
                    <Header />
                    <div className='container_form'>
                        <div className='container_form_general'>
                            <div className='container_form_general_infographics'>
                                <SlidePictures />
                            </div>
                            <Enter />
                        </div>
                     </div>
                </ThemeProvider>    
            </div>
        </>
    )
}

export default observer(Login);