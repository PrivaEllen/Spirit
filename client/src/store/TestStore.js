import {makeAutoObservable} from 'mobx';

export default class TestStore{
    constructor(){
        this._tests = []
        this._templates = []
        this._imgs = []
        this._some = 0
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

