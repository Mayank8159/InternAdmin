import React from 'react';

const dashboardCards = [
  {
    title: "Today's Classes",
    count: 5,
    color: 'bg-green-100 text-green-800',
    icon: '📚'
  },
  {
    title: 'Pending Attendance',
    count: 2,
    color: 'bg-yellow-100 text-yellow-800',
    icon: '📝'
  },
  {
    title: 'Notifications',
    count: 3,
    color: 'bg-blue-100 text-blue-800',
    icon: '🔔'
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome Back, Teacher!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md ${card.color} transition hover:scale-[1.03] hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{card.icon}</span>
              <span className="text-2xl font-bold">{card.count}</span>
            </div>
            <h3 className="text-lg font-medium">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;