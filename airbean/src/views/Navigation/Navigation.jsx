import './Navigation.scss';
import { useNavigate } from 'react-router-dom';
import closeBtn from '../../assets/closeBtn.svg';

function Navigation() {
    const navigate = useNavigate();

    return (
        <div className='navMenu'>
            <div className='navHeader'>
                <img className='closeNav' onClick={() => navigate('/menu')} src={closeBtn} alt="closeBtn" />
            </div>
            <div className='navMenuItems'>
                <p onClick={() => navigate('/menu')}>Meny</p>
                <p onClick={() => navigate('/about')}>Vårt kaffe</p>
                <p onClick={() => navigate('/status')}>Orderstatus</p>
            </div>
        </div>

    )

}

export default Navigation;