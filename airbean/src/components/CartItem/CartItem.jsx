import './CartItem.scss';

function CartItem(props) {
    const {name, price, quantity} = props;
    const total = quantity * price;
    return (
        <div className='cartItem'>
            <div className='productAndPrice'>
                <h3 className='productTitle'>{name}</h3>
                <p className='productPrice'>{total} kr</p>
            </div>
            <p className='quantity'>{quantity}</p>
        </div>
    )
}


export default CartItem;