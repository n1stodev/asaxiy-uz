import { DEL_ALL_TOP, DEL_FROM_TOP, ADD_TO_TOP } from '../action/actionType'

const navbar = (state = 0, action) => {
    switch (action.type) {
        case ADD_TO_TOP:
            return state++
        case DEL_FROM_TOP:
            return state--
        case DEL_ALL_TOP:
            return state = 0
        default:
            return state
    }
}

export default navbar