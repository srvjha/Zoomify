import { Link } from "react-router-dom";


const HomePage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center bg-black items-center ">
        <div className="text-6xl font-bold text-gray-300 mb-4">
          Welcome To <span className="text-indigo-600">Zoomify</span>
        </div>
  
        <div className="text-lg text-gray-300 text-center mb-8 w-[1000px]">
          Zoomify is an innovative Voice and Video Chat App designed to help you 
          stay connected with friends, family, and colleagues anytime, anywhere. 
          Whether it's a quick call or an important meeting, Zoomify delivers seamless 
          communication at your fingertips.
        </div>
  
        <div>
          <Link to='/room-page'>
          <button className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg shadow-md hover:bg-indigo-500 transition duration-300 ease-in-out">
            Get Started
          </button>
          </Link>
        </div>
  
        <div className="mt-12 text-gray-400 text-center max-w-lg">
          Experience high-quality audio and video calls with advanced features like screen 
          sharing, group calls, and secure encryption, making Zoomify your go-to app for all 
          your communication needs.
        </div>
      </div>
    );
  };
  
  export default HomePage;
  


