import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Compile = () => {
  const [fcmToken, setFcmToken] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending notification...");
    console.log("FCM Token:", fcmToken);
    console.log("Title:", title);
    console.log("Body:", body);
    setLoading(false);
    try {
        var data = {
            title: title,
            body: body,
            deviceToken: fcmToken,
        }
        const result = await axios.post("https://internadminbackend-3.onrender.com/api/firebase/send-notification", data);
        console.log(result);
        if(result.status === 200){
            toast.success(
                <div>
                    <div>Notification Sent Successfully</div>
                </div>,
                {position: 'top-right'}
            )

        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }

    // TODO: hook into backend or Firebase function to actually deliver the notification
  };

  return (
    <>
    <ToastContainer/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          📨 Send Firebase Notification
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            FCM Token
          </label>
          <textarea
            value={fcmToken}
            onChange={(e) => setFcmToken(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Paste FCM token here"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notification Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notification Body
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter body text"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading? 'Sending' : 'Send'}
        </button>
      </form>
    </div>
    </>
  );
};

export default Compile;