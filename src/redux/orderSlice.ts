import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ordersData from '../orders.json';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  product: 'Product 1' | 'Product 2' | 'Product 3';
  quantity: number;
  orderValue: number;
}

interface OrdersState {
  orders: Order[];
}

// Convert the JSON data to match the TypeScript Order type
const initialState: OrdersState = {
  orders: ordersData.map(order => ({
    id: order.id,
    customerName: order.customer_name,
    customerEmail: order.customer_email,
    product: order.product,
    quantity: order.quantity,
    orderValue: order.order_value
  }))
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    editOrder: (state, action: PayloadAction<{ id: string; updatedOrder: Order }>) => {
      const { id, updatedOrder } = action.payload;
      const index = state.orders.findIndex(order => order.id === id);
      if (index !== -1) {
        state.orders[index] = updatedOrder;
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
  },
});

export const { addOrder, editOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
