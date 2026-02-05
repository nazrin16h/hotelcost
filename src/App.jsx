import React from "react";
import { BookingProvider } from "./context/BookingContext";
import InitialForm from "./components/InitialForm";
import DailySelection from "./components/DailySelection";
import Summary from "./components/Summary";
import DailyMeal from "./components/DailyMeal";
import bgImage from "./assets/airplane.jpeg";

function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen font-sans text-blue-900">

        <nav className="bg-white shadow-md px-6 md:px-10 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">HotelCost</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-blue-600">Hotels</a>
            <a href="#" className="hover:text-blue-600">Restaurants</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-4 md:px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Start Estimation
          </button>
        </nav>

        <div
          className="relative h-[420px] flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
          <div className="relative z-10 text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Estimate your hotel & meal costs
            </h2>
            <p className="mt-3 text-blue-100 text-base md:text-lg">
              Plan your stay in 3 easy steps.
            </p>
            <button className="mt-6 bg-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="mx-auto -mt-8 bg-white rounded-full shadow-lg flex justify-between px-6 py-3 relative z-20 text-sm md:text-base
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <span className="font-semibold text-blue-700">1 Stay Details</span>
          <span>2 Meals</span>
          <span>3 Summary</span>
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 px-4 md:px-6">
          <div className="md:col-span-2 space-y-6">
            <InitialForm />
            <DailySelection />
            <DailyMeal />
          </div>

          <div className="md:col-span-1 p-0 md:p-6 lg:w-[500px] ">
            <div className="md:sticky md:top-6">
              <Summary />
            </div>
          </div>
        </div>

      </div>
    </BookingProvider>
  );
}

export default App;
