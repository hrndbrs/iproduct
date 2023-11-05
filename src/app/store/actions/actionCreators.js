import client from "@/app/config/api";
import {
    PENDING_FETCH_PRODUCTS,
    RESOLVE_FETCH_PRODUCTS,
    REJECT_FETCH_PRODUCTS,
    GET_CATEGORIES
} from "./actionTypes"

const pendingFetchProducts = () => ({
    type: PENDING_FETCH_PRODUCTS
})

const successFetchProducts = (payload) => ({
    type: RESOLVE_FETCH_PRODUCTS,
    payload
})

const rejectFetchProducts = (payload) => ({
    type: REJECT_FETCH_PRODUCTS,
    payload
})

const setCategories = (payload) => ({
    type: GET_CATEGORIES,
    payload
})

export function fetchProducts() {
    return async (dispatch) => {
        dispatch(pendingFetchProducts())
        try {
            const data = await client("/products")
            dispatch(successFetchProducts(data))
        } catch (err) {
            dispatch(rejectFetchProducts(err.message))
            throw err
        }
    }
}

export function getCategories() {
    return async (dispatch) => {
        const data = await client("/categories")
        dispatch(setCategories(data))
    }
}

export function getProductDetail(slug) {
    return async () => {
        const data = await client("/products/" + slug)
        return data
    }
}