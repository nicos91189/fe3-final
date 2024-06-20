import { React, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Message from "./Message";
import Button from "./Button";

const Form = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (contacto.nombre.length > 5 && regexEmail.test(contacto.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type='text'
          onChange={(event) =>
            setContacto({ ...contacto, nombre: event.target.value })
          }
        />
        <label>Email:</label>
        <input
          type='email'
          onChange={(event) =>
            setContacto({ ...contacto, email: event.target.value })
          }
        />
        {/* <Button>Cargar</Button> */}
        <button>Enviar</button>

        {show ? <Message contacto={contacto} /> : null}
        {error && <ErrorMessage />}
      </form>

    </>
  );
};

export default Form;
