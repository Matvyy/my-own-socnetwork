import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
// import { addPost, updateNewPostText, subscribe, addMessage, updateNewMessageText } from './redux/state';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerendereEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App 
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            />

        </BrowserRouter>
    );
}

rerendereEntireTree()
store.subscribe(rerendereEntireTree)

reportWebVitals();
