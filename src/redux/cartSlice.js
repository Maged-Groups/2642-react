import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: []
    },
    reducers: {
        rdx_add_to_cart: (state, { payload }) => {
            const existingItem = state.items.find(item => item.id === payload.id);

            if (existingItem)
                existingItem.quantity += 1;  // Increase quantity if item exists
            else
                state.items.push({ ...payload, quantity: 1 });  // Add new item with quantity 1 
        },

        rdx_remove_from_cart: (state, { payload: removed_id }) => {
            const existingItem = state.items.find(item => item.id === removed_id);

            if (existingItem)
                if (existingItem.quantity > 1)
                    existingItem.quantity -= 1;  // Reduce quantity if more than 1
                else
                    state.items = state.items.filter(item => item.id !== removed_id); // Remove item completely  
        }
    }
});

export default cartSlice.reducer;
export const { rdx_add_to_cart, rdx_remove_from_cart } = cartSlice.actions



