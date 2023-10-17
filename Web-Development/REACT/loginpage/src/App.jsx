import React, { useState } from "react";

const App = () => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(details);
  return (
    <form>
      <h1>
        Hello {details.fname} {details.lname}
      </h1>
      <p>{details.email}</p>
      <h3>First Name :</h3>
      <input
        type="text"
        name="fname"
        onChange={handleChange}
        autoComplete="given-name"
      />
      <h3>Last Name :</h3>
      <input
        type="text"
        name="lname"
        onChange={handleChange}
        autoComplete="family-name"
      />
      <h3>Email :</h3>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        autoComplete="email"
      />
      <h3>Password :</h3>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        autoComplete="current-password"
      />
      <h3>Address :</h3>
      <textarea
        name="address"
        onChange={handleChange}
        autoComplete="street-address"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
