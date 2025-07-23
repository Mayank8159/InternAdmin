import React from 'react';

const teacherProfile = {
  name: 'Mayank Sharma',
  email: 'mayank.sharma@school.edu',
  subject: 'Computer Science',
  joinedOn: 'July 12, 2021',
  avatar: 'https://ui-avatars.com/api/?name=Mayank+Sharma&background=0D8ABC&color=fff',
};

const Profile = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>

      <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={teacherProfile.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-700">{teacherProfile.name}</h3>
            <p className="text-sm text-gray-500">{teacherProfile.subject}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <p className="text-gray-700">{teacherProfile.email}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Joined On</label>
            <p className="text-gray-700">{teacherProfile.joinedOn}</p>
          </div>
        </div>

        <button
          onClick={() => alert('Edit Profile triggered')}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;