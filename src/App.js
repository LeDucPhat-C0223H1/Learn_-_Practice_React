// import logo from './logo.svg';
// import './App.css';

import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";
import HelloName from "./components/HelloName";
import Toggle from "./components/Toggle";
import Introduce from "./components/Introduce";

function App() {
  return (
    <div>
      <LoginControl />
      <br/>
      <Toggle />
      <br/>
      <Clock />
      <br/>
      <HelloName name="Alice" />
      <br/>
      <Introduce name="Sarah" />
    </div>
    
  )
}

export default App;
