import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/login/Header";
import SlidePictures from "../components/login/SlidePictures";
import SlideSigns from "../components/login/SlideSigns";
import Registr from "../components/login/Registr";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Registration() {
    return (
        <>
            <div className='container'>
                <ThemeProvider theme={darkTheme}>
                    <Header />
                    <div className='container_form'>
                        <div className='container_form_general'>
                            <div className='container_form_general_infographics'>
                                <SlidePictures />
                                <SlideSigns />
                            </div>
                            <Registr />
                        </div>
                     </div>
                </ThemeProvider>    
            </div>
        </>
    )
}