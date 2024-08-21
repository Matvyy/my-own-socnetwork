import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
// import { addPost, updateNewPostText, subscribe, addMessage, updateNewMessageText } from './redux/state';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App 
            state={store.getState()}

            />
        </Provider>
    </BrowserRouter>
    );


// rerendereEntireTree(store.getState())
// store.subscribe(() => {
//     let state = store.getState()
//     rerendereEntireTree(state)
// })

reportWebVitals();
