import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { refreshIcon } from '../utils/icons';
import OrderCard from './OrderCard';
import LoadingSpinner from './LoadingSpinner';
import useOrders from '../hooks/useOrders';

const OrderList: React.FC = () => {
  const { orders, loading, error, refreshOrders } = useOrders();

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={refreshOrders}
          className="button flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={refreshIcon} className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Orders</h2>
        <button 
          onClick={refreshOrders}
          disabled={loading}
          className="button flex items-center gap-2"
        >
          <FontAwesomeIcon 
            icon={refreshIcon} 
            className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} 
          />
          Refresh
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;