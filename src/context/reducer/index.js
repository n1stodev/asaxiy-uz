import { combineReducers } from "redux";
import heart from "./heart";
import dropdown from './dropdown'
import cart from './cart'
import auth from './auth'

const rootReducer = combineReducers({
    water() { return 'Redux water' },
    heart,
    dropdown,
    cart,
    auth
})

export default rootReducer