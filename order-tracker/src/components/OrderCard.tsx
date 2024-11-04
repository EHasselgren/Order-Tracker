import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Order, OrderStatusConfig } from '../types/order';
import { formatDate } from '../services/api';
import LocationMap from './LocationMap';
import {
  locationIcon,
  phoneIcon,
  userIcon,
  packageIcon,
  calendarIcon,
  clockIcon
} from '../utils/icons';
import { formatPhoneNumber } from '../utils/formatters';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const formattedPhone = formatPhoneNumber(order.user_phone);
    const statusConfig = OrderStatusConfig[order.status] || {
    label: order.status,
    color: 'text-gray-700',
    bgColor: 'bg-gray-100'
  };

  return (
    <div className="card border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.color}`}>
          {statusConfig.label}
        </span>
        <span className=" text-white bg-slate-500 px-3 py-1 rounded-full text-sm font-medium">
          ID: {order.parcel_id}
        </span>
      </div>

      <div className="mb-4">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      <FontAwesomeIcon icon={locationIcon} className="w-4 h-4 mr-2 text-gray-600" />
      <span className="text-sm">
        {order.location_name}
      </span>
    </div>
    {!order.location_status_ok && (
      <span className="text-xs text-white p-2  bg-orange-600 rounded-full text-center max-w-[40%]">Location status: Issue reported</span>
    )}
  </div>
  <LocationMap
    latitude={order.location_coordinate_latitude}
    longitude={order.location_coordinate_longitude}
    locationName={order.location_name}
  />
</div>

      <div className="grid grid-cols-4 gap-4 justify-center mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={userIcon} className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-sm">To: {order.user_name}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={phoneIcon} className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-sm">+{formattedPhone}</span>
          </div>
          <div className="flex items-center">
          <FontAwesomeIcon icon={packageIcon} className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-sm">From: {order.sender}</span>
        </div>
        {order.verification_required && (
          <div className="text-sm text-white p-2  bg-orange-600 rounded-full text-center ">
            Verification Required
          </div>
        )}
      </div>

      <div className="mb-4 flex items-center  justify-center">
      
      
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 border-t pt-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={calendarIcon} className="w-4 h-4 mr-2" />
          <span>ETA: {formatDate(order.eta)}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={clockIcon} className="w-4 h-4 mr-2" />
          <span>Updated: {formatDate(order.last_updated)}</span>
        </div>
      </div>

      {order.notes && (
        <div className="mt-4 text-sm text-gray-600 border-t pt-4">
          <p className="font-medium">Notes:</p>
          <p>{order.notes}</p>
        </div>
      )}
    </div>
  );
};

export default OrderCard;