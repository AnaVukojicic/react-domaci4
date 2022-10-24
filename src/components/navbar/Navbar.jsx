import clsx from 'clsx';
import React, { useState } from 'react';
import { links } from '../../constants/links';
import Logo from '../../img/logo.jpg';
import classes from './Navbar.module.scss';

const Navbar=()=>{
    const [showItems,setShowItems]=useState(false);

    const showOrCloseMenu=()=>{
        setShowItems(!showItems);
    }
    
    return (
        <div className={classes['nav-container']}>
            <ul className={clsx(showItems && classes['display-list-block'])}>
                <div className={clsx(!showItems && classes['mobile-menu'],showItems && classes['hamburger-close'])}>
                    <li key="logo" className={clsx(classes['img-container'],showItems && classes['remove-logo'])}>
                        <img src={Logo} alt="" className={classes['img']}/>
                    </li>
                    <li className={clsx(classes['hamburger-menu'])} onClick={()=>showOrCloseMenu()}><div></div></li>
                </div>
                {links.map(link=>
                    <li key={link.key} className={clsx(classes['items'], showItems && classes['items-shown'])} onClick={()=>showOrCloseMenu()}>
                        {link.title}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Navbar