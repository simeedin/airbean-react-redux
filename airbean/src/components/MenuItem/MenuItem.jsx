import './MenuItem.scss';
import {useDispatch} from 'react-redux';
import { addProduct } from '../../actions/cartActions';

function MenuItem(props) {
    const {product} = props;
    const dispatch = useDispatch();

    const handleAdd = () => {
        const addedProduct = {
            name: product.title,
            price: product.price,
            id: product.id,
            quantity: 1
        };
        dispatch(addProduct(addedProduct));
    }

    return (
        <div className='menuItem'>
            <div className='menuLeftSide'>
                <button className='addBtn' onClick={() => {handleAdd();}}>+</button>
                <div className='productAndDesc'>
                    <h5 className='product'>{product.title}</h5>
                    <p className='description'>{product.desc}</p>
                </div>
            </div>
            <p className='price'>{product.price}kr</p>
        </div>
    )
}

export default MenuItem;