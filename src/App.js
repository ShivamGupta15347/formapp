import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: " ",
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="App">
      <form>
        <br />
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="LastName"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          name="email"
          id=""
          value={formData.email}
        />
        <br />
        <textarea
          name="comments"
          placeholder="Enter Your comments here"
          onChange={changeHandler}
          value={formData.comments}
        ></textarea>

        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />

        <label htmlFor="isVisible">Am I Visible?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === ""}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === ""}
          />
          <label htmlFor="offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">favourite Car</label>
        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
        >
          <option value="scarpio">Scarpio</option>
          <option value="Thar">Thar</option>
          <option value="Fortuner">Fortuner</option>
          <option value="legender">Legender</option>
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
