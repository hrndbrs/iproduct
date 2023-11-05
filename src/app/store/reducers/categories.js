import { GET_CATEGORIES } from "../actions/actionTypes"

const initialState = {
    data: [],
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                data: action.payload
            }
    }

    return state
}