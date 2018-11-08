import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
import { createStore } from "redux";

function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch( { type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

const ADD_TODO = "添加 TODO";

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

const action = addTodo("Learn Redux");
console.log(action);

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
