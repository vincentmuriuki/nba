import React from 'react';
import style from './header.module.css'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

// Components
import SideNavigation from './SideNav/sideNav';

const Header = (props) => {


    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    const logo = () => (
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    return (
        <header className={style.header}>
            <SideNavigation {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;