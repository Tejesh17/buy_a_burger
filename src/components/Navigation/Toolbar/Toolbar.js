import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return(
        <>
        <header className={styles.Toolbar}>
            <DrawerToggle Clicked = {props.openDraw} ></DrawerToggle>
            <div className={styles.Logo}>
                <Logo></Logo>
            </div>
            <nav className={styles.Desktoponly}>    
                <NavigationItems></NavigationItems> 
            </nav>
        </header>
        </>
    )
}

export default toolbar