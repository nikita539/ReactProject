import {combineReducers, applyMiddleware,createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {userReducer} from "./user-reducer";
import {logInReducer} from "./login_reducers.ts/log_in-reducer";
import {registerReducer} from "./register-reducer";

// import { reducer as formReducer } from 'redux-form'



const rootReducer = combineReducers({
    user:userReducer,
    logIn:logInReducer,
    register: registerReducer,
    // form:formReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;