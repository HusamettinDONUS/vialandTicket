import { useContext, useEffect, useReducer, useState } from "react";
import "./paymentForm.scss";
import { TicketContext } from "../App";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";

const INCREMENT_ADULT = "INCREMENT_ADULT";
const DECREMENT_ADULT = "DECREMENT_ADULT";
const INCREMENT_CHILD = "INCREMENT_CHILD";
const DECREMENT_CHILD = "DECREMENT_CHILD";
const INCREMENT_BABY = "INCREMENT_BABY";
const DECREMENT_BABY = "DECREMENT_BABY";

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT_ADULT:
      return {
        ...state,
        adultCount: state.adultCount < 10 ? state.adultCount + 1 : 10,
      };
    case DECREMENT_ADULT:
      return {
        ...state,
        adultCount: state.adultCount > 0 ? state.adultCount - 1 : 0,
      };
    case INCREMENT_CHILD:
      return {
        ...state,
        childCount: state.childCount < 10 ? state.childCount + 1 : 10,
      };
    case DECREMENT_CHILD:
      return {
        ...state,
        childCount: state.childCount > 0 ? state.childCount - 1 : 0,
      };
    case INCREMENT_BABY:
      return {
        ...state,
        babyCount: state.babyCount < 10 ? state.babyCount + 1 : 10,
      };
    case DECREMENT_BABY:
      return {
        ...state,
        babyCount: state.babyCount > 0 ? state.babyCount - 1 : 0,
      };
    default:
      return state;
  }
};

function priceCalculator(state) {
  const totalPrice =
    state.adultCount * state.priceAdult + state.childCount * state.priceChild;

  return totalPrice;
}

const PaymentForm = () => {
  const {
    selectedTicket,
    setSelectedTicket,
    selectedDate,
    totalPrice,
    setTotalPrice,
  } = useContext(TicketContext);
  const [state, dispatch] = useReducer(reducer, selectedTicket);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    idNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setSelectedTicket(state);
    setTotalPrice(priceCalculator(state));
  }, [setSelectedTicket, setTotalPrice, state]);

  console.log(selectedTicket);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
      errors.name = "Name is invalid";
    }
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (!/^[a-zA-Z\s]*$/.test(values.surname)) {
      errors.surname = "Surname is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{11,20}$/.test(values.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.country) {
      errors.country = "Country is required";
    } else if (!/^[a-zA-Z\s]*$/.test(values.country)) {
      errors.country = "Country is invalid";
    }
    if (!values.city) {
      errors.city = "City is required";
    } else if (!/^[a-zA-Z\s]*$/.test(values.city)) {
      errors.city = "City is invalid";
    }
    if (!values.idNumber) {
      errors.idNumber = "ID number is required";
    } else if (!/^\d{11}$/.test(values.idNumber)) {
      errors.idNumber = "ID number is invalid";
    }
    if (!values.address) {
      errors.address = "Address is required";
    } else if (!/^[a-zA-Z0-9\s]*$/.test(values.address)) {
      errors.address = "Address is invalid";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
      console.log(validationErrors);
    }
  };

  const date = new Date(selectedDate);
  const dayOfWeek = date.toLocaleDateString(t("locale"), { weekday: "long" });
  const monthName = date.toLocaleDateString(t("locale"), { month: "long" });

  return (
    <div className="container ticket-booking">
      <div className="row">
        <div className="col-md-6 order-md-2">
          <div className="card rounded-5">
            <img className="card-img-top" src={state.image} alt={state.type} />
            <div className="card-body">
              <div>
                <div className="ticket-detail">
                  <h1 className="fw-bold">{state.type}</h1>
                  <div className="d-flex justify-content-between gap-3">
                    <p className="price">
                      <h3 className="d-block">{t("adult")}</h3>
                      <h4 className="fw-bold">{state.priceAdult} USD</h4>
                    </p>
                    <p className="price">
                      <h3 className="d-block">{t("child")}</h3>
                      <h4 className="fw-bold">{state.priceChild} USD</h4>
                    </p>
                  </div>
                  <p className="details">{state.details}</p>
                </div>
              </div>

              <h4 className="date m-0 date-element">
                {dayOfWeek}, {date.getDate()} {monthName} {date.getFullYear()}
              </h4>

              <div className="my-2 px-3 w-100">
                <div className="counter d-flex justify-content-between align-items-center my-2 mx-0">
                  <div className="counter-buttons">
                    <button
                      onClick={() => dispatch({ type: "DECREMENT_ADULT" })}
                    >
                      -
                    </button>
                    <span className="m-1 fw-bold">{state.adultCount}</span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT_ADULT" })}
                    >
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
                    <button
                      onClick={() => dispatch({ type: "DECREMENT_CHILD" })}
                    >
                      -
                    </button>
                    <span className="m-1 fw-bold">{state.childCount}</span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT_CHILD" })}
                    >
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
                    <button
                      onClick={() => dispatch({ type: "DECREMENT_BABY" })}
                    >
                      -
                    </button>
                    <span className="m-1 fw-bold">{state.babyCount}</span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT_BABY" })}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <i className="fa-solid fa-baby"></i>
                    <span>{t("baby")}</span>
                    <span className="age">(0-3)</span>
                  </div>
                </div>
              </div>
              <div className="total-cost">
                <h4>{t("Total Cost")}</h4>
                <h2> {totalPrice} USD</h2>
              </div>
            </div>
            <p className="card-text">{t("qr")}</p>
          </div>
        </div>
        <div
          className={
            i18next.language === "ar"
              ? "col-md-6 text-end"
              : "col-md-6 text-start"
          }
        >
          <h2 className="form-title">
            <i className="fa-solid fa-address-card"></i>
            {t("contact")}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("name")}</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("name")}
                required
              />
              <p className="text-danger">{errors.name}</p>
            </div>
            <div className="form-group">
              <label htmlFor="surname">{t("surname")}</label>
              <input
                placeholder={t("surname")}
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.surname}</p>
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t("phone")}</label>
              <input
                placeholder={t("phone")}
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.phone}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("email")}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={`${t("email")} abc@abc.abc`}
                required
              />
              <p className="text-danger">{errors.email}</p>
            </div>
            <div className="form-group">
              <label htmlFor="country">{t("country")}</label>
              <input
                placeholder={t("country")}
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.country}</p>
            </div>
            <div className="form-group">
              <label htmlFor="city">{t("city")}</label>
              <input
                placeholder={t("city")}
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.city}</p>
            </div>
            <div className="form-group">
              <label htmlFor="idNumber">{t("idNumber")}</label>
              <input
                placeholder={t("idNumber")}
                type="text"
                className="form-control"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.idNumber}</p>

              <small className="form-text text-muted">{t("validate")}</small>
            </div>
            <div className="form-group">
              <label htmlFor="address">{t("address")}</label>

              <textarea
                placeholder="address"
                type="text"
                className="form-control address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{errors.address}</p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="billingInfo"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="billingInfo">
                {t("checkbox1")}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="infoNotice"
                required
              />

              <label className="form-check-label" htmlFor="infoNotice">
                <Trans i18nKey="checkbox2">
                  I have read and understood the{" "}
                  <a href="#">information notice</a> regarding the processing of
                  my personal data.{" "}
                </Trans>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataConsent"
                required
              />
              <label className="form-check-label" htmlFor="dataConsent">
                <Trans i18nKey="checkbox3">
                  I give explicit consent to the processing and sharing of my
                  personal data for the purpose of presenting advantageous
                  offers to me. <a href="#">Explicit consent</a>.
                </Trans>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="commsConsent"
                required
              />
              <label className="form-check-label" htmlFor="commsConsent">
                <Trans i18nKey="checkbox4">
                  I accept the sending of{" "}
                  <a href="#">electronic communications</a> to me.
                </Trans>
              </label>
            </div>
            {errors.email && <p>{errors.email}</p>}
            <button
              type="submit"
              className="btn btn-primary my-3"
              onClick={() => validate(formData)}
            >
              {t("payment")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
