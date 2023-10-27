import React, { useState } from "react";

function App() {
  const [currentEmail, setEmail] = useState("");
  const [currentPassword, setPassword] = useState("");

  function handleEmail(event) {
    return setEmail(event.target.value);
  }
  function handlePassword(event) {
    return setPassword(event.target.value);
  }

  const credentials = { email: currentEmail, password: currentPassword };
  return (
    <form className="container">
      <div className="formElement">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          onChange={handleEmail}
          value={currentEmail}
          required
        />
      </div>
      <div className="formElement">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          onChange={handlePassword}
          value={currentPassword}
          required
        />
      </div>
      <button type="button" class="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default App;
