import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom'
import MainPage from './components/MainPage'
import PopUp from './components/PopUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}>
        <Route path="show-login-popup" element={< PopUp />} />
      </Route>
    </Routes>
  );
}

export default App;
