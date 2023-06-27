import { useState, useEffect } from "react";
import MenuList from "../../components/MenuList/MenuList";


function Menu() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        async function getMenu() {
            const response = await fetch('https://airbean.awesomo.dev/api/beans/');
            const data = await response.json();
            setMenu(data.menu);
        }
        getMenu();
    }, []);

    return (
        <div className='menu'>
            <MenuList menu={menu}/>
        </div>
    )

}

export default Menu;