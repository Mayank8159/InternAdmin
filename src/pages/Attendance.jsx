import React, { useState } from 'react';

const studentList = [
  { id: 1, name: 'Aarav Sharma' },
  { id: 2, name: 'Isha Verma' },
  { id: 3, name: 'Rohan Gupta' },
  { id: 4, name: 'Sneha Patel' },
  { id: 5, name: 'Vivaan Mehta' },
];

const Attendance = () => {
  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = () => {
    alert('Attendance marked:\n' + JSON.stringify(attendance, null, 2));
    // You can replace this with a POST request to your backend or Firebase
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Mark Attendance</h2>

      <ul className="bg-white rounded-lg shadow p-4 space-y-3">
        {studentList.map((student) => (
          <li key={student.id} className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">{student.name}</span>
            <input
              type="checkbox"
              checked={attendance[student.id] || false}
              onChange={() => toggleAttendance(student.id)}
              className="w-5 h-5 text-blue-600"
            />
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendance;