import React from 'react';
import { BellIcon } from '@heroicons/react/outline';

const NotificationButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
    >
      <BellIcon className="w-5 h-5" />
      Compile Notification
    </button>
  );
};

export default NotificationButton;