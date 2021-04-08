import React from 'react'
import styles from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) =>{
    let attachedClasses = [styles.SideDrawer, styles.Close]
    if(props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
    return (
        <>
        <Backdrop show={props.open} click={props.clicked}></Backdrop>
        <div className={attachedClasses.join(' ')}>
            <div className={styles.Logo}>
                <Logo></Logo>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </>
    )
}

export default  sideDrawer