import React from "react"

import style from "./Register.css";

const RegisterView = (props) => {
  const {
    onNameChange,
    name,
    addPerson
  } = {...props}
  return <div className="Register">
    <p>
      Ingresa tu nombre o apodo para registrar observaciones bajo ese alias
    </p>
    <input placeholder="Escribe tu nombre" type="text" onChange={onNameChange} value={name} />
    <br/>
    <br/>
    <button onClick={addPerson}>¡Regístrame!</button>
  </div>
}

export default RegisterView