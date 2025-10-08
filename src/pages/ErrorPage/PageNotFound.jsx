import React from 'react';
import errorPage from '../../assets/error-404.png'
const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
          <img
            src={errorPage}
            alt="App Error"
            className="w-40 h-40 mx-auto mb-6 animate-bounce"
          />
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            OOPS!! PAGE NOT FOUND
          </h1>
          <p className="text-gray-600 mb-6">
            The app you are looking for does not exist in our system. Please try another app or go back.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 font-semibold shadow-md"
          >
            Go Back
          </button>
        </div>
      </div>
    );
};

export default PageNotFound;