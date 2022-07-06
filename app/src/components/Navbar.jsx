import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
import img from "../img/PROPERTY.svg"

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }

    return (
        <div className='col-12 navbar d-flex justify-content-between '>
            <img src={img} className="img"/>
            <ul className={toggleMenu ? 'navbarMenu expanded' : 'navbarMenu'}>

                <a className='menuItems' text-primary href="#">Home</a>
                <a className='menuItems' text-primary href="#">About</a>
                <a className='menuItems' text-primary href="#">Service</a>
                <a className='menuItems' text-primary href="#">Blog</a>
                <a className='menuItems' text-primary href="#">Properties</a>
                <a className='menuItems' text-primary href="#">Contact</a>


            </ul>

            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>
        </div>
    );
};

export default Navbar;