🧑‍🏫 Teacher Portal – Frontend
A responsive web application built for educational institutions, enabling secure teacher workflows, real-time data interactions, and push notifications. This frontend integrates seamlessly with a Firebase-powered backend and is optimized for deployment on Vercel.
🚀 Live Preview
🔗 [Vercel Deployment](https://teacher2-admin.vercel.app/)

📦 Tech Stack
| Technology | Purpose | 
| React | UI rendering and component architecture | 
| Firebase | Authentication, Firestore, FCM | 
| Axios | REST API communication with backend | 
| Tailwind CSS | (Optional) Responsive UI styling | 
| Vercel | Frontend hosting & deployment | 

✨ Key Features
- 🔐 Role-Based Authentication via Firebase
- 🧮 Real-Time Dashboards powered by Firestore
- 🔔 Push Notifications with Firebase Cloud Messaging
- ⚡ Modular & Responsive UI tailored for teachers/admins

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/teacher-portal-frontend.git
cd teacher-portal-frontend
npm install

2. Create .env File
Add your environment variables:
REACT_APP_API_BASE_URL=https://your-backend-api.com/api
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


🔐 Make sure these values match your Firebase config.


🧪 Scripts
| Command | Purpose | 
| npm start | Run in development mode | 
| npm run build | Build for production | 


🧩 Folder Structure
├── src/
│   ├── components/     # Reusable UI elements
│   ├── pages/          # Routes & views
│   ├── context/        # Global state providers
│   ├── utils/          # Axios config & helpers
│   └── firebase/       # Firebase config & FCM logic
├── public/
├── .env
└── package.json


🌐 Deployment (Vercel)
To deploy:
- Connect repository to Vercel
- Set environment variables via Vercel Dashboard
- Build Command: npm run build
- Output Directory: build
✅ Automatic HTTPS, CDN distribution, and zero-config builds.


👤 Author
Mayank Sharma
Full-stack Developer | Firebase & Security Enthusiast


 
