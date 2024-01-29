import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        incCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            if (index < 0) {
                // birinchi marta bosilganda
                state.value = [...state.value, { ...action.payload, quantity: 1 }]
            } else {
                // ko'p marta bosilganda
                state.value = state.value.map((item, inx) => {
                    return inx === index ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        removeFromCart(state, action) {
            state.value = state.value.filter(el => el.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        decCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            if (index < 0) {
                // birinchi marta bosilganda
                state.value = [...state.value, { ...action.payload, quantity: 1 }]
            } else {
                // ko'p marta bosilganda
                state.value = state.value.map((item, inx) => {
                    return inx === index ? { ...item, quantity: item.quantity - 1 } : item
                })
            }
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        removeAllCart(state, action) {
            state.value = []
            localStorage.setItem("cart", JSON.stringify(state.value))
        }
    }
})
export const { incCart, decCart, removeFromCart, removeAllCart } = cartSlice.actions
export default cartSlice.reducer