import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
// import { addPost, updateNewPostText, subscribe, addMessage, updateNewMessageText } from './redux/state';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerendereEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App 
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}
            />

        </BrowserRouter>
    );
}

rerendereEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerendereEntireTree(state)
})

reportWebVitals();
