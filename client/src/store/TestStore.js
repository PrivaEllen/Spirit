import {makeAutoObservable} from 'mobx';

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