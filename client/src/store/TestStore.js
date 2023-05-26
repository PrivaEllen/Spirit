import {makeAutoObservable} from 'mobx';

export default class TestStore{
    constructor(){
        this._tests = []
        this._templates = []
        this._imgs = []
        this._some = 0
        this._statistic = 0
        this._type = ""
        makeAutoObservable(this)
    }

    setTests(test){
        this._tests = test
    }
    setType(val){
        this._type = val
    }

    setTemplates(templates){
        this._templates = templates
    }
    
    setImg(img){
        console.log(img)
        this._img = img
    }

    setStatistic(value){
        this._statistic = value
    }
    
    incrementSome(){
        this._some += 1
    }
}

