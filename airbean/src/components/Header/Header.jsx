import './Header.scss';
import navIcon from '../../assets/navIcon.svg';
import cartIcon from '../../assets/cartIcon.svg';
import { useNavigate } from 'react-router-dom';


function Header(props) {
    const {icon, iconNav} = props;
    const navigate = useNavigate();

    return (
        
        <div className='header'>
            <div>
                <img className={iconNav} onClick={() => navigate('/nav')} src={navIcon} alt="navIcon" />
            </div>
            <div className={icon}>
                <button className='quantityIcon'>0</button>
                <img className='cartIcon' src={cartIcon} alt="cartIcon" />
            </div>
        </div>
        
    )
}

export default Header;