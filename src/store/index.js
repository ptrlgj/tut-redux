import { legacy_createStore as createStore } from "redux";

const reducerFn = (state={counter: 0}, action) => {

    if(action.type === "increment"){
        return {counter: state.counter += 1}
    }
    else if(action.type === "decrement"){
        return {counter: state.counter -= 1}
    }
    else if(action.type === "addBy"){
        return {counter: state.counter += action.payload}
    }
    return state;
}

const store = createStore(reducerFn);

export default store;