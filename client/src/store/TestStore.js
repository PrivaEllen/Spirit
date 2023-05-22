import {makeAutoObservable} from 'mobx';

export default class TestStore{
    constructor(){
        this._tests = []
        this._templates = []
        this._img = 'http://localhost:5000/defaultPat.png'
        makeAutoObservable(this)
    }

    setTests(test){
        this._tests = test
    }

    setTemplates(templates){
        this._templates = templates
    }
    
    setImg(img){
        console.log(img)
        this._img = img
    }
}