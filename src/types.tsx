export interface Order {
    id: string;
    customerName: string;
    customerEmail: string;
    product: 'Product 1' | 'Product 2' | 'Product 3';
    quantity: number;
    orderValue: number;
  }
  