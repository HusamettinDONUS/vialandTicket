import { useContext } from "react";
import TicketOption from "./TicketOption";
import "./ticketSelector.scss";
import { TicketContext } from "../App";
import { useTranslation } from "react-i18next";

let ticketInformation = {
  type: "",
  image: "",
  priceAdult: 0,
  priceChild: 0,
  adultCount: 0,
  childCount: 0,
  babyCount: 0,
};

let filteredData = [];

function TicketSelector({ selectedCategory }) {
  const { setSelectedTicket } = useContext(TicketContext);
  const { t } = useTranslation();

  let dummyData = [
    {
      category: "THEME PARK",
      type: t("Daily Ticket"),
      priceAdult: 60.0,
      priceChild: 60.0,
      details: t("dailyTicketDetails"),
      image: "/theme.png",
    },
    {
      category: "PACKAGES",
      type: t("Silver Package"),
      priceAdult: 90.0,
      priceChild: 90.0,
      details: t("silverPackageDetails"),
      image: "/silver.png",
    },
    {
      category: "PACKAGES",
      type: t("Gold Package"),
      priceAdult: 120.0,
      priceChild: 120.0,
      details: t("goldPackageDetails"),
      image: "/gold.png",
    },
    {
      category: "PACKAGES",
      type: t("Diamond Package"),
      priceAdult: 145.0,
      priceChild: 145.0,
      details: t("diamondPackageDetails"),
      image: "/diamond.png",
    },
    {
      category: "PARKOUR",
      type: t("High Rope Parkour"),
      priceAdult: 20.0,
      priceChild: 20.0,
      details: t("highRopeParkourDetails"),
      image: "/parkur.jpg",
    },
    {
      category: "PARKOUR",
      type: t("Net Parkour"),
      priceAdult: 15.0,
      priceChild: 15.0,
      details: t("netParkourDetails"),
      image: "/parkur.jpg",
    },
    {
      category: "PARKOUR",
      type: t("Net Trampoline"),
      priceAdult: 10.0,
      priceChild: 10.0,
      details: t("netTrampolineDetails"),
      image: "/parkur.jpg",
    },
    {
      category: "PARKOUR",
      type: t("Tubby Slide"),
      priceAdult: 10.0,
      priceChild: 10.0,
      details: t("tubbySlideDetails"),
      image: "/parkur.jpg",
    },
    {
      category: "PARKOUR",
      type: t("Climbing Wall"),
      priceAdult: 15.0,
      priceChild: 15.0,
      details: t("climbingWallDetails"),
      image: "/parkur.jpg",
    },
    {
      category: "PARKOUR",
      type: t("Parkour Bundle"),
      priceAdult: 35.0,
      priceChild: 35.0,
      details: t("parkurBundleDetails"),
      image: "/parkur.jpg",
    },
  ];

  if (selectedCategory === "ALL") {
    filteredData = dummyData;
  } else {
    filteredData = dummyData.filter(
      (ticket) => ticket.category === selectedCategory
    );
  }

  const handleTicketSelect = (ticket, adultCount, childCount, babyCount) => {
    ticketInformation.type = ticket.type;
    ticketInformation.image = ticket.image;
    ticketInformation.priceAdult = ticket.priceAdult;
    ticketInformation.priceChild = ticket.priceChild;
    ticketInformation.adultCount = adultCount;
    ticketInformation.childCount = childCount;
    ticketInformation.babyCount = babyCount;

    setSelectedTicket(ticketInformation);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-center">
        {filteredData.map((ticket) => (
          <TicketOption
            key={ticket.type}
            type={ticket.type}
            priceAdult={ticket.priceAdult}
            priceChild={ticket.priceChild}
            details={ticket.details}
            image={ticket.image}
            onSelect={(adultCount, childCount, babyCount) =>
              handleTicketSelect(ticket, adultCount, childCount, babyCount)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TicketSelector;
