import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogsReducer from './messages-reducer'
import usersReducer from './users-reducer'
import contentReducer from './content-reducer'
import usersapiReducer from './usersapi-reducer'
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer';

let reducers = combineReducers({
        messages: dialogsReducer,
        users: usersReducer,
        content: contentReducer,
        usersapi: usersapiReducer,
        auth: authReducer,
        app: appReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); 

export default store