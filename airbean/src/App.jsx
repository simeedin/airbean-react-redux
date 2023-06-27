import './App.css'
import landingLogo from './assets/landingLogo.svg';
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  return (
    <div className='landing'>
      <img className='landingLogo' onClick={() => navigate('/nav')} src={landingLogo} alt="landingLogo" />
    </div>
  )
  
}

export default App
