import React, { useContext, useMemo, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import { countries, hotels, boardTypes } from "../data/data";

const InitialForm = () => {
  const {
    citizenship, setCitizenship,
    startDate, setStartDate,
    numDays, setNumDays,
    destination, setDestination,
    selectedHotel, setSelectedHotel,
    boardType, setBoardType,
    setDailySelections
  } = useContext(BookingContext);

  const [showToast, setShowToast] = useState(false);

  const handleBoardChange = (code) => {
    setBoardType(code);
  };

  const isFormValid = useMemo(() => {
    return (
      citizenship &&
      startDate &&
      numDays &&
      Number(numDays) > 0 &&
      destination &&
      selectedHotel &&
      boardType
    );
  }, [citizenship, startDate, numDays, destination, selectedHotel, boardType]);

  const handleConfirm = () => {
    if (!isFormValid) return;

    const initialDays = [];
    for (let i = 1; i <= Number(numDays); i++) {
      initialDays.push({
        day: i,
        hotel: selectedHotel,
        lunch: null,
        dinner: null
      });
    }

    setDailySelections(initialDays);


    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 py-10 px-4 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6">

        <h2 className="text-2xl font-bold text-blue-800">Stay Details</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-blue-700 font-medium">Citizenship</label>
            <select
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              {countries.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Number of Days</label>
            <input
              type="number"
              min="1"
              value={numDays}
              onChange={(e) => setNumDays(e.target.value)}
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <label className="text-sm text-blue-700 font-medium">Destination Country</label>
            <select
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setSelectedHotel("");
              }}
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              {countries.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Hotel</label>
            <select
              value={selectedHotel || ""}
              onChange={(e) => setSelectedHotel(e.target.value)}
              disabled={!destination}
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            >
              <option value="">Select</option>
              {destination && hotels[destination]?.map((h) => (
                <option key={h.id} value={h.name}>
                  {h.name} (${h.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Board Type</label>
            <div className="flex gap-3 mt-2">
              {boardTypes.map(b => (
                <label key={b.code} className="flex items-center gap-1 text-blue-800">
                  <input
                    type="radio"
                    value={b.code}
                    checked={boardType === b.code}
                    onChange={() => handleBoardChange(b.code)}
                    className="accent-blue-600"
                  />
                  {b.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!isFormValid}
          className={`w-full py-3 rounded-2xl text-lg font-semibold shadow-lg transition
            ${isFormValid
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 cursor-not-allowed"}`}
        >
          Next
        </button>
      </div>

      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 z-40 text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in">
          The information was successfully saved!
        </div>
      )}

      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
          0% { transform: translateX(100%) translateY(0); opacity: 0; }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default InitialForm;
