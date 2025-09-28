import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) return;
      state.items.push({...action.payload, quantity: 1});
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    increase: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
    deleteItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.totalPrice -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    }
  }
});

export const { addItem, increase, decrease, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
