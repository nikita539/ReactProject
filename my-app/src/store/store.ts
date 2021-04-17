import {combineReducers, applyMiddleware,createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {userReducer} from "./user-reducer";
import {logInReducer} from "./log_in-reducer";
import {registerReducer} from "./register-reducer";
import {profileReducer} from "./profile-reducer";
import {loginErrorReducer} from './loginError-reducer'
import {tableReducer} from "./table-reducer";
import {sortReducer} from "./sort-reducer";
import {paginationReducer} from "./pagination-reducer";


const rootReducer = combineReducers({
    user:userReducer,
    logIn:logInReducer,
    register: registerReducer,
    profileDate:profileReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;