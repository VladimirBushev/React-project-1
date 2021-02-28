import NavbarBlockStyle from './NavbarBlock.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

const NavbarBlock = (props) => {
    return (
        <div className={NavbarBlockStyle}>
            <NavLink to={props.to} activeClassName={NavbarBlockStyle.active}>
                <div className={NavbarBlockStyle.div}>
                    {props.value}
                </div>
            </NavLink>
        </div>
    )
}

export default NavbarBlock;