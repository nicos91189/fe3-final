import React from 'react'

const ErrorMessage = () => {
    return (
        <div>
            <h4 style={{ color: "red" }}>
            “Por favor chequea que la información sea correcta”
            </h4>
            <h5>
                La nombre debe tener 5 letras.
            </h5>
            <h5>  
                El email debe ingresarse correctamente.
            </h5>
        </div>
    )
}

export default ErrorMessage