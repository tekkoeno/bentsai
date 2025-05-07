import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  delieveryMethod: JSON.parse(localStorage.getItem('delieveryMethod')) || {
    name: 'Самовывоз',
    value: 'pickup',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDelieveryMethod(state, action) {
      state.delieveryMethod = action.payload;
      localStorage.setItem('delieveryMethod', JSON.stringify(state.delieveryMethod));
    },
    addToCart(state, action) {
      const { product, count } = action.payload; // получаем товар и его количество
      const existingItem = state.items.find((i) => i.id === product.id);

      if (existingItem) {
        existingItem.count += count;
      } else {
        state.items.push({ ...product, count }); // добавляем весь товар с количеством
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      state.delieveryMethod = {
        name: 'Самовывоз',
        value: 'pickup',
      };
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    increaseCount(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count += 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decreaseCount(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setDelieveryMethod,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
