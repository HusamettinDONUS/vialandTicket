import { useContext, useEffect, useState } from "react";
import "./layout.scss";
import { Link, Outlet } from "react-router-dom";
import { TicketContext } from "../App";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { logo } from "../../public/logo.png";

function Layout() {
  const { selectedDate, setSelectedDate } = useContext(TicketContext);
  const [language, setLanguage] = useState(i18next.language || "en");
  const { t } = useTranslation();
  useEffect(() => {
    window.document.dir = i18next.dir();
  }, [language]);

  return (
    <div className="text-center bg-light">
      <div className="container container-custom d-flex flex-column flex-md-row justify-content-between align-items-center">
        <Link to="/">
          <div className="row justify-content-center">
            <div className="col-auto">
              <img src="/logo.png" alt="ViaLand Logo" className="img-fluid" />
              <img
                src="/public/logo.png"
                alt="ViaLand Logo"
                className="img-fluid"
              />
              <img
                src="../../public.logo.png"
                alt="ViaLand Logo"
                className="img-fluid"
              />
              <img src={logo} alt="ViaLand Logo" className="img-fluid" />
            </div>
          </div>
        </Link>

        <div className="bg-light d-flex flex-column justify-content-around align-items-center p-2 rounded w-auto mb-3 m-md-0">
          <label htmlFor="date" className="m-0 date-label">
            <h4>{t("date")}</h4>
          </label>
          <input
            id="date"
            className="bg-light border-0 text-center"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
          />
        </div>

        <div className="row justify-content-center bg-light">
          <div className="col-auto">
            <select
              className="form-select bg-light border-0 shadow-none"
              value={language}
              onChange={(e) => {
                i18next.changeLanguage(e.target.value);
                setLanguage(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="ar">اللغة العربية</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
