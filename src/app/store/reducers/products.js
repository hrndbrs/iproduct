import {
    PENDING_FETCH_PRODUCTS,
    REJECT_FETCH_PRODUCTS,
    RESOLVE_FETCH_PRODUCTS
} from "../actions/actionTypes";

const initialState = {
    data: [],
    isLoading: false,
    error: ""
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING_FETCH_PRODUCTS:
            return {
                ...initialState,
                isLoading: true
            }
        case REJECT_FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case RESOLVE_FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
    }

    return state
}