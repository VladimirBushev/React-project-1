import headerStyle from './Header.module.css';
import HeaderImage from './HeaderImage.jsx';
import HeaderBlock from './HeaderBlock.jsx';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.headerContent}>
                <HeaderImage />
                <HeaderBlock value='Плеер' />
                <HeaderBlock value='Файлы' />
                <HeaderBlock value='Видео' />
                <HeaderBlock value='Маркет' />
                <div className={headerStyle.loginBlock}>
                    {props.isAuth ?
                        <div>
                            <div >{props.login}</div>
                            <button onClick={props.logout} className={headerStyle.button}>Выйти</button>
                        </div> :
                        <div className={headerStyle.login}>
                            <NavLink to={'/login'}>Войти</NavLink>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;