import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/login/Header";
import SlidePictures from "../components/login/SlidePictures";
import Registr from "../components/login/Registr";
import { observer } from "mobx-react-lite";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Registration() {
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
                            <Registr />
                        </div>
                     </div>
                </ThemeProvider>    
            </div>
        </>
    )
}

export default observer(Registration);