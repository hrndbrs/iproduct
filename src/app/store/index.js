import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from "redux"
import thunk from "redux-thunk"
import productReducer from "./reducers/products"
import categoryReducer from "./reducers/categories"


export const store = createStore(
    combineReducers({
        products: productReducer,
        categories: categoryReducer
    }),
    applyMiddleware(thunk)
)
