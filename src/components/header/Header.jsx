import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import search from '../../img/search.svg';
import izbrannyi from '../../img/izbrannyi.svg';
import cart from '../../img/cart.svg';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ saveuser, lengthcart, onclickForm }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    React.useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div className='header-container'>
            <img src={logo} alt="" />

            <div className='header-user'>

                <h3 className='name'>{saveuser.length > 0 ? saveuser : 'username'}</h3>
            </div>

            <div className='header-search'>
                <img src={search} alt="" />
                <input type='text' placeholder='Search for anything' />
            </div>

            <div className='header-counter'>
                <img src={izbrannyi} alt="" />
                <Link to={'/cart'}>

                    <img src={cart} alt="" />                {currentPath === '/cart' && <span style={{ color: 'white' }}>{lengthcart}</span>}

                </Link>
                {saveuser.length > 0 ? null : <p style={{ cursor: 'pointer' }} onClick={onclickForm}>Войти</p>}

            </div>
        </div>
    );
}

export default Header;