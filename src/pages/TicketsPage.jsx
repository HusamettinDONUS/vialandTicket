import { useState } from "react";
import Navbar from "../components/Navbar";
import TicketSelector from "../components/TicketSelector";

function TicketsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <TicketSelector selectedCategory={selectedCategory} />
    </div>
  );
}

export default TicketsPage;
