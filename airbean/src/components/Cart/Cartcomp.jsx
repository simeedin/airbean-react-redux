import './Cartcomp.scss';
import cartIcon from '../../assets/cartIcon.svg';
import navIcon from '../../assets/navIcon.svg';
import CartItem from '../CartItem/CartItem';
import { clearCart, getOrder } from '../../actions/cartActions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cartcomp() {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);
    
    const handleCart = () => {
        setShowCart(!showCart);
    }

    const dispatch = useDispatch();

    const cart = useSelector((state) => {return state.cart});
    const total = useSelector((state) => {return state.total});
    
    const totalQuantity = cart.reduce((acc, product) => {
        return acc + product.quantity;
    }, 0);
    
    const cartComponents = cart.map((product) => {
        return <CartItem name={product.name} price={product.price} quantity={product.quantity} key={product.id}/>
        
    });

    async function createOrder(orderDetails) {
        try {
            const response = await fetch('https://airbean.awesomo.dev/api/beans/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
            });
            const data = await response.json();
            dispatch(getOrder(data.orderNr));
            console.log(data.orderNr);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async function addOrder() {
        const details = {details: {order: cart}};
        await createOrder(details);
        dispatch(clearCart());
        navigate('/status');
    }



    // console.log(cartComponents);

    return (
        <div className='cartWrapper'>
            <div className='iconWrapper'>
                <img className='navIcon' onClick={() => navigate('/nav')} src={navIcon} alt="navIcon" />

                <div className='cartAndQuantity'>
                    <button className='quantityIcon'>{totalQuantity}</button>
                    <img className='cartIcon' onClick={handleCart}src={cartIcon} alt="cartIcon" />
                </div>
            </div>
            {showCart && 
                <div className='cart'>
                    <div className='cartAndQuantity'>
                        <button className='quantityIcon'>{totalQuantity}</button>
                        <img className='cartIcon' onClick={handleCart}src={cartIcon} alt="cartIcon" /> 
                    </div>
                    <div className='arrow'></div>
                    <div className='cartContent'>
                        <h3 className='cartText'>Din beställning</h3>
                        <div className='cartItems'>
                            {cartComponents}
                            <h4 className='total'>Total <span className='totalSum'>{total}kr</span></h4>
                            <p className='totalText'>Inkl moms + drönarleverans</p>
                        </div>
                        <div className='cartBottom'>
                            <button className='payBtn' onClick={addOrder}>Take my money!</button>
                        </div>
                    </div>
                </div>

            }
                
        </div>        


    )

}
                
                
    



export default Cartcomp;