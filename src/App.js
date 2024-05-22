import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    pass: "",
    phonenumber: "",
    country: "india",

    city: "",
    state: "",
    postalcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formdata);
  }

  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <form onSubmit={submitHandler}>
          <label htmlFor="firstname" className="text-black">
            Firstname
          </label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="love"
            value={formdata.firstname}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />
          <label htmlFor="lastname" className="text-black">
            Lastname
          </label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="love"
            value={formdata.lastname}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />

          <label htmlFor="username" className="text-black">
            username
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formdata.username}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />

          <label htmlFor="email" className="text-black">
            email
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={formdata.email}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />
          <label htmlFor="pass" className="text-black">
            password
          </label>
          <br />
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="pass"
            value={formdata.pass}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />
          <br />
          <label htmlFor=" phonenumber" className="text-black">
            phonenumber
          </label>
          <br />
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            placeholder="phonenumber"
            value={formdata.phonenumber}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />

          <label htmlFor="country">Country</label>
          <br />
          <select
            id="country"
            name="country"
            value={formdata.country}
            onChange={changeHandler}
            className="border border-black"
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
          <br />

          <label htmlFor="city" className="text-black">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formdata.city}
            onChange={changeHandler}
            className="border border-black"
          >
            <option value="Paris">Paris</option>
            <option value="RAJASTHAN">RAJASTHAN</option>
            <option value="Patna">Patna</option>
            <option value="Quantum">Quantum</option>
          </select>
          <br />

          <br />
          <label htmlFor="state" className="text-black">
            State
          </label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="RAJASTHAN"
            value={formdata.state}
            onChange={changeHandler}
            className="border border-black"
          />
          <br />
          <label htmlFor="postalcode" className="text-black">
            Postal Code
          </label>
          <br />
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="302010"
            value={formdata.postalcode}
            onChange={changeHandler}
            className="border border-black"
          />
          <fieldset>
            <legend>By Email</legend>
            <div className="flex flex-row">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formdata.comments}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Hello, I will what to do</p>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formdata.candidates}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Hello, I will what to do</p>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formdata.offers}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="offers">Offers</label>
                <p>Hello, I will what to do</p>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Push Notifications</legend>
            <p>therhlknlksnflk</p>
            <input
              type="radio"
              name="pushnotifications"
              id="pusheverything"
              value="everything"
              checked={formdata.pushnotifications === "everything"}
              onChange={changeHandler}
            />
            <label htmlFor="pusheverything">Everything</label>
            <br />
            <input
              type="radio"
              name="pushnotifications"
              id="pushemail"
              value="same as email"
              checked={formdata.pushnotifications === "same as email"}
              onChange={changeHandler}
            />
            <label htmlFor="pushemail">Same as email</label>
            <br />
            <input
              type="radio"
              name="pushnotifications"
              id="pushnothing"
              value="no push notifications"
              checked={formdata.pushnotifications === "no push notifications"}
              onChange={changeHandler}
            />
            <label htmlFor="pushnothing">No push notifications</label>
          </fieldset>
          <button className="bg-blue-500 rounded-lg text-white font-bold p-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
