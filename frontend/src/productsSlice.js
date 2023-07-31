import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    editProduct(state, action) {
      const index = state.findIndex((product) => product.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, deleteProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
