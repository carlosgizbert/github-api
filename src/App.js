import logo from './logo.svg';
import './App.css';
import {  BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import feather from 'feather-icons/dist/feather.min.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes/>
      {feather.replace()}
    </div>

    </BrowserRouter>
  );
}

export default App;
