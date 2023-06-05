import React from "react";
import '../stylesheets/counter.css';

function Contador({ numClics }) {
    return(
        <div className="contador">
            {numClics}
        </div>
    );
}

export default Contador;