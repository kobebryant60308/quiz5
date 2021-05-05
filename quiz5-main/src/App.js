import logo from './logo.svg';
import './App.css';
import multiButton from './cgu_multiButton.js';
import hellocgu from './cgu_hello.js';


 function App() {
  return (
    <div className="App">
      <div>
      {hellocgu()}
    </div>
    
    <div >
    { multiButton(10) }
    </div>
    </div>

  );
 }


export default App;
