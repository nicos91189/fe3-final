const Message = ({contacto}) => {
    const { nombre, email } = contacto;
  
    return (
      <div>
        <h4>nombre: {nombre}.
          <br /> email: {email}</h4>
        <h4>Se registro con exito</h4>
      </div>
    )
  }
  
  export default Message