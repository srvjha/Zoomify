import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomPage = () => {
  const [roomID, setRoomID] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const StartChat = () => {
    if (roomID.length >= 6) {
      setError(""); // Clear error message if valid
      navigate(`/chat-room?roomID=${roomID}`);

    }  else if(roomID.length === 0) {
        setError("Please enter a room ID");
      }
    else {
      setError("Invalid Room ID. Must be longer than 6 characters.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <div className="border-2 border-white p-10 rounded-lg">
        <div className="text-2xl font-semibold text-white mb-4">
        Enter Room ID
      </div>

      <input
        type="text"
        id="room-id"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 w-64"
        placeholder="Enter room ID..."
      />
        </div>
     

      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}

      <button
        onClick={StartChat}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300"
      >
        Start Chat
      </button>
    </div>
  );
};

export default RoomPage;
