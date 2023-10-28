import React, { useState } from "react";
import FormElement from "./FormElement";

function Form() {
  const [currentEmail, setEmail] = useState("");
  const [currentPassword, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const credentials = { email: currentEmail, password: currentPassword };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        console.log("Email:", currentEmail);
        console.log("Email:", currentPassword);
        window.location.href = "/Login.html";
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <form
      className="container"
      action="/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <FormElement
        element="email"
        change={handleEmail}
        currentValue={currentEmail}
      />
      <FormElement
        element="password"
        change={handlePassword}
        currentValue={currentPassword}
      />
      <input type="submit" value="Submit" className="btn btn-success" />
    </form>
  );
}

export default Form;
