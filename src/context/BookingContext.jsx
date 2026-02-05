import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [citizenship, setCitizenship] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numDays, setNumDays] = useState(1);
  const [destination, setDestination] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [boardType, setBoardType] = useState("");
  const [dailySelections, setDailySelections] = useState([]);

  return (
    <BookingContext.Provider value={{
      citizenship, setCitizenship,
      startDate, setStartDate,
      numDays, setNumDays,
      destination, setDestination,
      selectedHotel, setSelectedHotel,
      boardType, setBoardType,
      dailySelections, setDailySelections
    }}>
      {children}
    </BookingContext.Provider>
  );
};
