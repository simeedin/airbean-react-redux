import './Status.scss';
import drone from  '../../assets/drone.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Status() {
    const navigate = useNavigate();
    const [eta, setEta] = useState(null);

    const orderNr = useSelector((state) => {return state.orderNr});
    console.log(orderNr); 

    async function getStatus(orderNr) {
        try {
            const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNr}`, {
                headers: {'Content-Type': 'application/json'}
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    useEffect(() => {
        async function displayStatus() {
            const currentStatus = await getStatus(orderNr);
            setEta(currentStatus.eta);
        }

        displayStatus();
    }, []);



    return (
        <div className='status'>
            <p className='orderNrText'>Ordernummer <span className='orderNr'>#{orderNr}</span></p>
            <img className='drone' src={drone} alt="drone" />
            <h2 className='statusText'>Din beställning är på väg!</h2>
            <p className='eta'>{eta} minuter</p>
            <button className='okBtn' onClick={() => navigate('/menu')}>Ok, cool!</button>
        </div>
    )
}

export default Status;