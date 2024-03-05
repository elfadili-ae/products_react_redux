import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [],
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload
        }
    }
})

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        const data = await fetch('https://fakestoreapi.com/products')
        const json = await data.json();
        dispatch(fetchProducts(json));
    }
}

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;