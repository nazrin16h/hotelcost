import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { meals } from "../data/data";

const DailySelection = () => {
  const { dailySelections, setDailySelections, destination, boardType } =
    useContext(BookingContext);

  if (!destination || dailySelections.length === 0) return null;

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
    <div className="p-4 md:p-6 rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 via-white to-blue-200 border border-white/40">
      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4">
        Step 2: Daily Meal Configuration
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm md:text-base text-gray-700 rounded-xl">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <th className="p-2 md:p-3 text-left">Day</th>
              <th className="p-2 md:p-3 text-left">Lunch</th>
              <th className="p-2 md:p-3 text-left">Dinner</th>
            </tr>
          </thead>

          <tbody>
            {dailySelections.map((day, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white/60" : "bg-blue-50/60 backdrop-blur-sm"}
              >
                <td className="p-2 md:p-3 font-medium whitespace-nowrap">{day.day}</td>

                <td className="p-2 md:p-3">
                  <select
                    value={day.lunch || ""}
                    onChange={(e) => handleChange(index, "lunch", e.target.value)}
                    disabled={boardType === "NB"}
                    className="w-full p-2 md:p-3 rounded-lg border border-blue-200 bg-white/80 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  >
                    <option value="">Select</option>
                    {meals[destination].lunch.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name} (${m.price})
                      </option>
                    ))}
                  </select>
                </td>

                {/* Dinner */}
                <td className="p-2 md:p-3">
                  <select
                    value={day.dinner || ""}
                    onChange={(e) => handleChange(index, "dinner", e.target.value)}
                    disabled={boardType === "NB"}
                    className="w-full p-2 md:p-3 rounded-lg border border-blue-200 bg-white/80 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  >
                    <option value="">Select</option>
                    {meals[destination].dinner.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name} (${m.price})
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailySelection;
