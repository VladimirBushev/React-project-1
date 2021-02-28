import navbarStyle from './Navbar.module.css';
import NavbarBlock from './NavbarBlock.jsx';
import React from 'react';


const NavBar = () => {
    return (
        <nav className={navbarStyle.nav}>
            <NavbarBlock value='Моя страница' to='/profile'/>
            <NavbarBlock value='Новости' to='/news'/>
            <NavbarBlock value='Мессенджер' to='/messages'/>
            <NavbarBlock value='Пользователи' to='/users'/>
            <NavbarBlock value='Пользователи API' to='/usersapi'/>

        </nav>
    )
}


export default NavBar;