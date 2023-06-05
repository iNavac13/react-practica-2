import React from "react";
import '../stylesheets/button.css';

function Button({texto, esBotonDeClic, manejarClic}) {
    return(
        <button 
        className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={manejarClic}
        >
            {texto}
        </button>
    );
}

export default Button;