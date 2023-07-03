import {Link} from 'react-router-dom';
import { useState } from 'react';
//import { getActiveElement } from '@testing-library/user-event/dist/utils';

const Home = () => {
    const [size, setColor] = useState('#2196F3');
    const moin = () => {
        setColor('#f37521');
    }

    const mout = () => {
        setColor('#2196F3');
    }


    return (
        <div className="home">
            <div className='content' >
                <div>
                    <p style={{margin: 0}}>Welcome to HeadPhone Rental !!</p>
                    <Link to="/RentalList" onMouseEnter={() => moin()} onMouseOut={() => mout()} style={{color: size}}>checkout Headphones!</Link>
                </div>
            </div>
        </div>
    );
}
export default Home;