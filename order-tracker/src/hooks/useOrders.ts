import { useState, useEffect } from 'react';
import { Order } from '../types/order';
import { getOrders } from '../services/api';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getOrders();
        setOrders(data);
        setError(null);
      } catch {
        setError('Failed to fetch orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const refreshOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setOrders(data);
      setError(null);
    } catch {
      setError('Failed to refresh orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return {
    orders,
    loading,
    error,
    refreshOrders
  };
};

export default useOrders;