import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';


import { auth } from '../reducers/auth.reducers'


const reducer = combineReducers({
    auth,
})

const middleware = composeWithDevTools(applyMiddleware(...[thunkMiddleware]));

export const store = createStore(reducer, middleware);