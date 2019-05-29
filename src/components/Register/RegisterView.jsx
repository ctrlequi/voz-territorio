import React from "react"

import style from "./Register.css";

const RegisterView = (props) => {
  const {
    onNameChange,
    name,
    addPerson
  } = {...props}
  return <div className="Register">
    <input type="text" onChange={onNameChange} value={name} />
    <button onClick={addPerson}>Registrsar</button>
  </div>
}

export default RegisterView