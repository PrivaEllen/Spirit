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

    setType(val){
        this._type = val
    }

    setTests(test){
        this._tests = test
    }

    setTemplates(templates){
        this._templates = templates
    }
    
    setImgs(id, img){
        console.log(id, '\n', img)
        this._imgs[id] = img 
    }

    incrementSome(){
        this._some += 1
    }

    setStatistic(value){
        this._statistic = value
    }
}