import {makeAutoObservable} from 'mobx';
import TestService from '../services/TestService';
import axios from 'axios'
import { SERVER_URL } from '../http/http';
import { REGISTRATION, TEST_SET } from '../router/utils';

export default class TestStore{
    constructor(){
        this._tests = []
        this._templates = []
        makeAutoObservable(this)
    }

    setTests(test){
        this._tests = test
    }

    setTemplates(templates){
        this._templates = templates
    }
}