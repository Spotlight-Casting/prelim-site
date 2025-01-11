"use client";
import React, { useState } from "react";


const SignUpPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Sign Up Button */}
      <button
        onClick={togglePopup}
        className="bg-yellow-400 p-4 px-16 rounded-full hover:bg-yellow-500 text-black mt-4 font-bold"
      >
        Sign Up
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-2xl font-bold font-custom mb-4">ARE YOU...</h2>
            <div className="flex justify-around mt-4">
              <a
                href="https://airtable.com/appo3zEOUjvTEVJtb/pagHiqoRboKnGsUBP/form"
                className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600"
              >
                An Actor
              </a>
              <a
                href="https://airtable.com/appo3zEOUjvTEVJtb/pagU3zp29gxqU6c1B/form"
                className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600"
              >
                A Filmmaker
              </a>
            </div>
            <button
              onClick={togglePopup}
              className="mt-6 text-red-500 underline hover:text-red-700 font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPopup;
