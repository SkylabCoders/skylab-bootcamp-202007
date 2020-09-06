import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
import actionType from '../actions/actionType';


class NBAStore extends EventEmitter {

    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }

    emitChange(){
        this.emit('change');
    }

    getList(){
        return _nbaList;
    }

}

const nbaStore = new NBAStore();

dispatcher.register((action) => {
    if(action.type === actionType.LOAD_LIST){
        _nbaList = action.data;
        nbaStore = emitChange();

    } else{
        throw `The action type ${action} is unknnown`
    }
})