import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-3 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} EduTrack. All rights reserved.</p>

        {/* PWA Install Prompt Placeholder */}
        <button
          onClick={() => alert('PWA install functionality will be triggered here.')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Install App
        </button>
      </div>
    </footer>
  );
};

export default Footer;