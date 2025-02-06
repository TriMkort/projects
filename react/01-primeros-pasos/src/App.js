import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App(){
  const ficha_medica ={
    altura:"180",
    grupo:"o+",
    alergias:"Ninguna",
    estado:"Bueno"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estos son mis primeros pasos con react :D
        </p>
        <div className='Componentes'> 
        <hr/>
        <EventosComponente/>
        <hr/>
        <TercerComponente 
        nombre = ""
        apellido = ""
        ficha = {ficha_medica}
        />
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
