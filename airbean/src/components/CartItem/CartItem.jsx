import './CartItem.scss';

function CartItem(props) {
    const {name, price, quantity, remove} = props;
    const total = quantity * price;
    return (
        <div className='cartItem'>
            <div className='productAndPrice'>
                <h3 className='productTitle'>{name}</h3>
                <p className='productPrice'>{total} kr</p>
            </div>
            <div className='quantityAndBtn'>
                <p className='quantity'>{quantity}</p>
                <button className='removeBtn' onClick={remove}>-</button>
            </div>
        </div>
    )
}


export default CartItem;