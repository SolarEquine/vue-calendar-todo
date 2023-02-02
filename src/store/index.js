import {createStore} from "vuex"

export default createStore({
    state:{
        currDate: Date.now()
    },
    mutations:{
        updateDate(state){
            state.currDate += 1000;
        }
    }
})