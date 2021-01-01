import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route'
import { Provider } from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index'


const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>
    , document.getElementById('root')
);