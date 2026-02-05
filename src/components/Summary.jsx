import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { meals, hotels } from "../data/data";

const Summary = () => {
  const {
    citizenship,
    startDate,
    numDays,
    destination,
    boardType,
    dailySelections,
  } = useContext(BookingContext);

  if (!destination || dailySelections.length === 0) return null;

  const getHotelPrice = (hotelName) => {
    const hotel = hotels[destination]?.find((h) => h.name === hotelName);
    return hotel ? hotel.price : 0;
  };

  const getMealPrice = (mealId, type) => {
    if (!mealId) return 0;
    const meal = meals[destination][type].find((m) => m.id === mealId);
    return meal ? meal.price : 0;
  };

  const dailyTotals = dailySelections.map((day) => {
    const hotelPrice = getHotelPrice(day.hotel);
    const lunchPrice = getMealPrice(day.lunch, "lunch");
    const dinnerPrice = getMealPrice(day.dinner, "dinner");
    return hotelPrice + lunchPrice + dinnerPrice;
  });

  const grandTotal = dailyTotals.reduce((acc, curr) => acc + curr, 0);

  const totalHotel = dailySelections.reduce(
    (acc, day) => acc + getHotelPrice(day.hotel),
    0
  );

  const totalMeals = dailySelections.reduce(
    (acc, day) =>
      acc + getMealPrice(day.lunch, "lunch") + getMealPrice(day.dinner, "dinner"),
    0
  );

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Summary</h2>
        <div className="grid grid-cols-2 gap-4 text-blue-800 font-medium">
          <div className="flex justify-between">
            <span>Hotel:</span>
            <span>${totalHotel}</span>
          </div>
          <div className="flex justify-between">
            <span>Meals:</span>
            <span>${totalMeals}</span>
          </div>
          <div className="flex justify-between col-span-2 border-t border-blue-200 pt-2 text-lg font-bold">
            <span>Total:</span>
            <span>${grandTotal}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-blue-50 p-5 rounded-xl shadow-inner text-blue-900">
        <p><strong>Citizenship:</strong> {citizenship}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>Days:</strong> {numDays}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Board Type:</strong> {boardType}</p>
      </div>
    </div>
  );
};

export default Summary;
