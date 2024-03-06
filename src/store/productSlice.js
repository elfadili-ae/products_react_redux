import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import statusCode from '../utils/statusCode';


const initialState = {
    data: [],
    status: 'idle'
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = statusCode.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = statusCode.IDLE;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = statusCode.ERROR;
            })
    }
})

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const json = await data.json();
    return json;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const json = await data.json();
//         dispatch(fetchProducts(json));
//     }
// }

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;