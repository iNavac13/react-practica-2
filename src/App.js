import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp-logo2.png';
import Button from './components/button';
import Contador from './components/counter';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }
  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img className='freeCodeCamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
