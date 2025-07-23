import React from 'react';
import NotificationButton from '../components/NotificationButton';
import { useNavigate } from 'react-router-dom';

const sampleMessages = [
  {
    id: 1,
    sender: 'Admin',
    content: 'Staff meeting at 4 PM.',
    timestamp: '10:32 AM',
  },
  {
    id: 2,
    sender: 'Coordinator',
    content: 'Submit attendance by noon.',
    timestamp: '9:15 AM',
  },
  {
    id: 3,
    sender: 'Parent Group',
    content: 'Class 8 picnic permission forms due.',
    timestamp: 'Yesterday',
  },
];

const Message = () => {
  const navigate = useNavigate();

  const handleNotification = () => {
    navigate('/compile');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Messages & Notifications</h2>

      {/* 🔔 Notification Button */}
      <NotificationButton onClick={handleNotification}  />

      {/* 📨 Message List */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4 mt-4">
        {sampleMessages.map((msg) => (
          <div key={msg.id} className="border-b pb-3 last:border-none last:pb-0">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>{msg.sender}</span>
              <span>{msg.timestamp}</span>
            </div>
            <p className="text-gray-700">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;