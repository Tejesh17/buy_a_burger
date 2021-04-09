import React, {Component} from 'react'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class layout extends Component{
    
    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render(){
        return(
            <>
            <SideDrawer open={this.state.showSideDrawer} click = {this.sideDrawerClosedHandler}></SideDrawer>

            <Toolbar openDraw = {this.sideDrawerOpenHandler}></Toolbar>
            <main className={styles.content}>
                {this.props.children}
            </main>
            </>
        )
    }
}

export default layout