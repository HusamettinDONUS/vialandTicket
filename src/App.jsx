import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PaymentForm from "./pages/PaymentForm";
import TicketsPage from "./pages/TicketsPage";
import Layout from "./pages/Layout";
import { createContext, useState } from "react";

const today = new Date().toISOString().split("T")[0];

export const TicketContext = createContext(null);

function App() {
  const [selectedTicket, setSelectedTicket] = useState();
  const [selectedDate, setSelectedDate] = useState(today);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TicketContext.Provider
      value={{
        selectedTicket,
        setSelectedTicket,
        selectedDate,
        setSelectedDate,
        totalPrice,
        setTotalPrice,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TicketsPage />} />
            <Route
              path="payment"
              element={
                selectedTicket ? <PaymentForm /> : <Navigate to="/" replace />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TicketContext.Provider>
  );
}

export default App;
