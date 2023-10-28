import React from "react";

function FormElement(props) {
  return (
    <div className="formElement">
      <label htmlFor={props.element}>
        {props.element === "email" ? "Email" : "Password"}
      </label>
      <input
        type={props.element}
        id={props.element}
        name={props.element}
        autoComplete={props.element}
        onChange={props.change}
        value={props.currentValue}
        required
      />
    </div>
  );
}

export default FormElement;
