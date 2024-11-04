import axios from 'axios';
import { Order } from '../types/order';

import { config } from '../config/env';

const api = axios.create({
  baseURL: config.apiUrl,
  params: {
    key: config.apiKey
  }
});

export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await api.get<Order[]>('');
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatCoordinates = (lat: number, lon: number): string => {
  return `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
};

export default api;