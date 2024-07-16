import { useState } from "react";
import "./navbar.scss";
import { useTranslation } from "react-i18next";

function Navbar({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const { t } = useTranslation();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <nav className="container navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none" href="#">
          PLANS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button
              className={`nav-link ${
                selectedCategory === "ALL" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("ALL")}
            >
              {t("all")}
            </button>
            <button
              className={`nav-link ${
                selectedCategory === "THEME PARK" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("THEME PARK")}
            >
              {t("theme park")}
            </button>
            <button
              className={`nav-link ${
                selectedCategory === "PACKAGES" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("PACKAGES")}
            >
              {t("packages")}
            </button>
            <button
              className={`nav-link ${
                selectedCategory === "PARKOUR" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("PARKOUR")}
            >
              {t("parkour")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
