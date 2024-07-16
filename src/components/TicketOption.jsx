import { useReducer } from "react";
import "./ticketOption.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialState = {
  adultCount: 1,
  childCount: 0,
  babyCount: 0,
};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "INCREMENT_ADULT":
      return {
        ...state,
        adultCount: state.adultCount < 10 ? state.adultCount + 1 : 10,
      };
    case "DECREMENT_ADULT":
      return {
        ...state,
        adultCount: state.adultCount > 0 ? state.adultCount - 1 : 0,
      };
    case "INCREMENT_CHILD":
      return {
        ...state,
        childCount: state.childCount < 10 ? state.childCount + 1 : 10,
      };
    case "DECREMENT_CHILD":
      return {
        ...state,
        childCount: state.childCount > 0 ? state.childCount - 1 : 0,
      };
    case "INCREMENT_BABY":
      return {
        ...state,
        babyCount: state.babyCount < 10 ? state.babyCount + 1 : 10,
      };
    case "DECREMENT_BABY":
      return {
        ...state,
        babyCount: state.babyCount > 0 ? state.babyCount - 1 : 0,
      };
    default:
      return state;
  }
};

function TicketOption({
  type,
  priceAdult,
  priceChild,
  details,
  image,
  onSelect,
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { adultCount, childCount, babyCount } = state;
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="ticket-option">
      <div>
        <img src={image} alt={`${type} image`} className="ticket-image" />
        <div className="ticket-details">
          <h3>{type}</h3>
          <div className="d-flex justify-content-between gap-3">
            <p className="price">
              <span className="d-block">{t("adult")}</span>
              <span className="fw-bold">{priceAdult} USD</span>
            </p>
            <p className="price">
              <span className="d-block">{t("child")}</span>
              <span className="fw-bold">{priceChild} USD</span>
            </p>
          </div>
          <p className="details">{details}</p>
        </div>
      </div>
      <div className="my-2 px-3 w-100">
        <div className="counter d-flex justify-content-between align-items-center my-2 mx-0">
          <div className="counter-buttons">
            <button onClick={() => dispatch({ type: "DECREMENT_ADULT" })}>
              -
            </button>
            <span className="m-1 fw-bold">{adultCount}</span>
            <button onClick={() => dispatch({ type: "INCREMENT_ADULT" })}>
              +
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <span>{t("adult")}</span>
            <span className="age">(+15)</span>
          </div>
        </div>

        <div className="counter d-flex justify-content-between align-items-center my-2 mx-0">
          <div className="counter-buttons">
            <button onClick={() => dispatch({ type: "DECREMENT_CHILD" })}>
              -
            </button>
            <span className="m-1 fw-bold">{childCount}</span>
            <button onClick={() => dispatch({ type: "INCREMENT_CHILD" })}>
              +
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <i className="fa-solid fa-child"></i>
            <span>{t("child")}</span>
            <span className="age">(4-12)</span>
          </div>
        </div>

        <div className="counter d-flex justify-content-between align-items-center my-2 mx-0">
          <div className="counter-buttons">
            <button onClick={() => dispatch({ type: "DECREMENT_BABY" })}>
              -
            </button>
            <span className="m-1 fw-bold">{babyCount}</span>
            <button onClick={() => dispatch({ type: "INCREMENT_BABY" })}>
              +
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <i className="fa-solid fa-baby"></i>
            <span>{t("baby")}</span>
            <span className="age">(0-3)</span>
          </div>
        </div>
        <button
          className="buy"
          onClick={() => {
            onSelect(adultCount, childCount, babyCount);
            navigate("/payment");
          }}
        >
          {t("buy")}
        </button>
      </div>
    </div>
  );
}

export default TicketOption;
