import logo from './logo.svg';
import './App.css';
import PurebaComponet from './componets/PruebaComponet';
import AjaxComponent from './componets/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <PurebaComponet/>

      <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
