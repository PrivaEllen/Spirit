import React, {useContext, useEffect} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/login/Header";
import SlidePictures from "../components/login/SlidePictures";
import SlideSigns from "../components/login/SlideSigns";
import Enter from "../components/login/Enter";
import { Context } from "../index"
import { observer } from "mobx-react-lite";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Login() {
    const {user} = useContext(Context)
    useEffect(() => {
        if (localStorage.getItem('token')){
            user.check()
        }
    }, [])
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
                            {/* <h1>{user._isAuth ? 'Авторизован' : 'Не авторизован'}</h1>
                            <h1>{user._user?.isActivated ? "yes" : "no"}</h1> */}
                            <Enter />
                        </div>
                     </div>
                </ThemeProvider>    
            </div>
        </>
    )
}

export default observer(Login);