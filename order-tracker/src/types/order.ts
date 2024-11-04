export interface Order {
  id: number;
  status: 'delivered' | 'ready-for-pickup' | 'on-the-way' | 'order-info-received';
  eta: string;
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  user_phone: string;
  user_name: string;
  notes: string | null;
  last_updated: string;
}

export const OrderStatusConfig: Record<Order['status'], {
  label: string;
  color: string;
  bgColor: string;
}> = {
  'delivered': {
    label: 'Delivered',
    color: 'text-white',
    bgColor: 'bg-green-700'
  },
  'ready-for-pickup': {
    label: 'Ready for Pickup',
    color: 'text-white',
    bgColor: 'bg-blue-700'
  },
  'on-the-way': {                    
    label: 'In Transit',
    color: 'text-white',
    bgColor: 'bg-yellow-700'
  },
  'order-info-received': {      
    label: 'Pending',
    color: 'text-white',
    bgColor: 'bg-gray-700'
  }
};