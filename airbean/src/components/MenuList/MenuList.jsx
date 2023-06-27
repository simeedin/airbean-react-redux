import './MenuList.scss';
import Cartcomp from '../Cart/Cartcomp';
import MenuItem from '../MenuItem/MenuItem';


function MenuList(props) {
    const {menu} = props;
    
    

    const productsInMenu = menu.map((product) => {
        return <MenuItem product={product} key={product.id} />
    });

    

    return (
        <div className='menuList'>
            <div className='layer'>
                <Cartcomp/>
            </div>

        
            <div className='products'>
                <h1 className='menuTitle'>Meny</h1>
                {productsInMenu}
            </div>
            
        </div>



    )
}

export default MenuList;