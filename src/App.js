
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import {Login} from './components/Login';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import JournalTraderPage from './components/JournalTraderPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            
                
                <Route  path="/" element={<Login />} />
                <Route path="/HomePage" element={<>
                <NavBar /> 
                <HomePage />
                </>} />
                <Route path="/JournalTrader" element={<>
                <NavBar /> 
                <JournalTraderPage />
                </>} />
              

        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
