import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import OrderItem from './OrderItem';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 10;

const OrderList: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOrderValue = filteredOrders.reduce((total, order) => total + order.orderValue, 0);
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div>
      <div className="mb-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="text-xl font-bold">Total Order Value: ${totalOrderValue}</p>
      </div>
      <div className="flex flex-col space-y-4">
        {paginatedOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default OrderList;
