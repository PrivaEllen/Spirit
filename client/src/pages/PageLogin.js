import React, {useContext} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/login/Header";
import SlidePictures from "../components/login/SlidePictures";
import Enter from "../components/login/Enter";
import { observer } from "mobx-react-lite";
import { Context } from '../index'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Login() {
    const {user} = useContext(Context)
    return (
        <>
            <div className='container'>
                {/* <h1>{user._user.id}</h1> */}
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