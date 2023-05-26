import { makeAutoObservable } from "mobx";
import Fuse from "fuse.js";

class setClass{
    constructor(){
        this._filteredList = []
        this._all = []
        this._data = []
        makeAutoObservable(this);
    }

    setList(filList){
        this._filteredList = filList
    }

    setData(value){
        this._data = value
    }

    setTests(all){
        this._all = all
    }

    TestFilter(category){
      console.log(this._all)
        if (category === 'all'){
            this._filteredList = this._all;
        }
        else{
            this._filteredList = this._all.filter((item) => item.type === category);
        }
        this._data = this._filteredList;
    }

    searchData = (pattern) => {
        console.log(pattern)
        if (!pattern) {
         this._data = this._filteredList;
          return;
        }
    
        const fuse = new Fuse(this._data, {
          keys: ["name"],
        });

        console.log(this._data)
        console.log(fuse)
    
        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
          this._data =[];
        } else {
          result.forEach(({item}) => {
            matches.push(item);
          });
          this._data = matches;
        }
      };
}

const stc = new setClass()

export default stc