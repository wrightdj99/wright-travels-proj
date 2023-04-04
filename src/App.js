import './styles/HotelStyles.css'
import  { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
