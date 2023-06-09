import {
    ADD_TO_HEART,
    ADD_TO_CART,
    DEL_FROM_CART,
    DEL_FROM_HEART,
    DROPDOWN,
    DEC_FROM_CART,
    DEl_ALL_CART,
    LOG_IN,
    LOG_OUT,
    ADD_TO_TOP,
    DEL_FROM_TOP,
    DEL_ALL_TOP
} from "./actionType"

export const addToHeart = (payload) => {
    return { type: ADD_TO_HEART, payload }
}

export const addToCart = (payload) => {
    return { type: ADD_TO_CART, payload }
}

export const removeFromHeart = (payload) => {
    return { type: DEL_FROM_HEART, payload }
}

export const removeFromCart = (payload) => {
    return { type: DEL_FROM_CART, payload }
}

export const dropdown = () => {
    return { type: DROPDOWN }
}

export const decFromCart = (payload) => {
    return { type: DEC_FROM_CART, payload }
}

export const delAllCart = () => {
    return { type: DEl_ALL_CART }
}

export const logIn = (payload) => {
    return {
        type: LOG_IN, payload
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const addToTop = () => {
    return {
        type: ADD_TO_TOP
    }
}

export const delAllTop = () => {
    return {
        type: DEL_ALL_TOP
    }
}

export const delFromTop = () => {
    return {
        type: DEL_FROM_TOP
    }
}