import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { meals, hotels } from "../data/data";

function DailyMeal() {
    const { dailySelections, setDailySelections, destination, boardType } =
        useContext(BookingContext);

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

    const handleChange = (dayIndex, type, value) => {
        const updated = [...dailySelections];

        if (boardType === "HB") {
            if (type === "lunch") updated[dayIndex].dinner = null;
            if (type === "dinner") updated[dayIndex].lunch = null;
        }

        updated[dayIndex][type] = Number(value);
        setDailySelections(updated);
    };

    return (
        <div className="rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Daily Meals & Prices</h2>

                <div className="overflow-x-auto rounded-xl">
                    <table className="w-full table-auto divide-y divide-blue-200">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="p-3 text-left">Day</th>
                                <th className="p-3 text-left">Hotel</th>
                                <th className="p-3 text-left">Lunch</th>
                                <th className="p-3 text-left">Dinner</th>
                                <th className="p-3 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-blue-100">
                            {dailySelections.map((day, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition">
                                    <td className="p-3 font-semibold text-blue-700 whitespace-nowrap">
                                        Day {day.day}
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        {day.hotel} (${getHotelPrice(day.hotel)})
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        {day.lunch
                                            ? `${meals[destination].lunch.find((m) => m.id === day.lunch)?.name} ($${getMealPrice(day.lunch, "lunch")})`
                                            : "-"}
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        {day.dinner
                                            ? `${meals[destination].dinner.find((m) => m.id === day.dinner)?.name} ($${getMealPrice(day.dinner, "dinner")})`
                                            : "-"}
                                    </td>
                                    <td className="p-3 font-bold text-blue-800 whitespace-nowrap">
                                        ${dailyTotals[index]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DailyMeal;
