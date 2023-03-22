import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios'
import { SERVER_URL } from '../http/http';
import { LOGIN, TEST_SET } from '../router/utils';

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        this._authError = ''
        this._registrError = ''
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    setAuthError(str){
        this._authError = str
    }

    setRegistrError(str){
        this._registrError = str
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.user)
            this.setAuthError('')
            console.log(5)
            window.location.assign(TEST_SET);
        }
        catch(e){
            this.setIsAuth(false)
            console.log(6)
            this.setAuthError('Логин или пароль не совпадают')
            console.log(e.response?.data?.message)
        }
    }

    async registration(Name, Surname, email, password){
        try{
            const response = await AuthService.registration(Name, Surname, email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setUser(response.data.user)
            this.setIsAuth(true)
            this.setRegistrError('')
            console.log(3)
            window.location.assign(LOGIN)
        }
        catch(e){
            this.setIsAuth(false)
            console.log(4)
            this.setRegistrError('Данная почта уже занята')
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setIsAuth(false)
            this.setUser({})
        }
        catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async check(){
        try{
            const response = await axios.get(`${SERVER_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.dataUser)
            console.log(1)
        }
        catch(e){
            console.log(e.response?.data?.message)
            console.log(2)
        }
    }
}