import {combineReducers, applyMiddleware,createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {userReducer} from "./user-reducer";
import {logInReducer} from "./log_in-reducer";
import {registerReducer} from "./register-reducer";



const rootReducer = combineReducers({
    user:userReducer,
    logIn:logInReducer,
    register: registerReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;