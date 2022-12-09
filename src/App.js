import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { All } from './components/all';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <All />
      </BrowserRouter>
    </div>
  );
}

export default App;
