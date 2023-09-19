import { createContext, useContext, useState } from 'react';

const TicketContext = createContext({
  token: null,
  setTicket: () => {},
});

export function TicketProvider({ children }) {
  const [ticket, setTicket] = useState(null);
  const value = { ticket, setTicket };
  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}

export const useTicketContext = () => useContext(TicketContext);
