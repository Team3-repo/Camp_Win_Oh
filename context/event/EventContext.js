// EventContext.js
import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState({
    eventTitle: '',
    eventDescription: '',
    eStartDate: '',
    eEndDate: '',
    organizerNick: '',
    camp_id: 1,
    campName: '',
    campAdd: '',
    selectedBookType: null,
    orderQuantity: 1,
    orderAmount: 0,
    eventPeople: 1,
    eOtherFees: 0,
    costPerPerson: 0,
    eventNotes: '',
    imageUrl: '',
  });

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};
