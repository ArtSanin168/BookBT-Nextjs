"use client";

import { useState } from "react";

const SearchBar = () => {
  const [selectedService, setSelectedService] = useState("TXAI Service");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with form data
    console.log("Search submitted:", {
      selectedService,
      startLocation,
      endLocation,
      startDate,
      startTime,
      options,
    });
  };

  return (
    <div className="search-bar mt-20 -mb-20">
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <div className="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg ">
          <div className="flex items-center me-4 mb-5">
              <input
                id="yellow-radio"
                type="radio"
                value="TXAI Service"
                name="colored-radio"
                checked={selectedService === "TXAI Service"}
                onChange={handleServiceChange}
                className="hidden"
              />
              <label
                htmlFor="yellow-radio"
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center ${
                    selectedService === "TXAI Service"
                      ? "bg-yellow-400"
                      : "bg-black"
                  }`}
                >
                  <div
                    id="custom-radio-yellow"
                    className={`w-3 h-3 rounded-full transition duration-200 ease-in-out ${
                      selectedService === "TXAI Service" ? "" : "hidden"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  TXAI Service
                </span>
              </label>
              <input
                id="red-radio"
                type="radio"
                value="BUS Service"
                name="colored-radio"
                checked={selectedService === "BUS Service"}
                onChange={handleServiceChange}
                className="hidden"
              />
              <label
                htmlFor="red-radio"
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center ${
                    selectedService === "BUS Service"
                      ? "bg-yellow-400"
                      : "bg-black"
                  }`}
                >
                  <div
                    id="custom-radio-red"
                    className={`w-3 h-3 rounded-full transition duration-200 ease-in-out ${
                      selectedService === "BUS Service" ? "" : "hidden"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  BUS Service
                </span>
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="text"
                id="start-location"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg focus:outline-none focus:border-yellow-500"
                placeholder="Start Location"
                required
              />
              <button
                type="button"
                className="p-2.5 text-sm font-medium bg-gray-900 bg-opacity-50 text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-500 hover:bg-opacity-30 hover:text-yellow-600 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-50 focus:border-yellow-600"
              >
                <svg
                  className="w-4 h-4 inline-block text-white"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 16 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="end-location"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                placeholder="End Location"
                required
              />
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                required
              />
              <input
                type="time"
                id="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg  focus:outline-none focus:border-yellow-500"
                required
              />
              <button
                type="submit"
                className="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36"
              >
                <span className="relative z-10">Search</span>
                <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
              </button>
            </div>

            <div className="flex items-center mt-5 mx-5 ">
              <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                More options :
              </span>
              {Object.entries(options).map(([key, value]) => (
                <label
                  key={key}
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id={key}
                    name={key}
                    checked={value}
                    onChange={handleCheckboxChange}
                    className="hidden"
                  />
                  <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                    <svg
                      className={`w-5 h-5 text-yellow-300 ${
                        value ? "" : "hidden"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                      />
                    </svg>
                  </div>
                  Option {key.substring(6)}
                </label>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
