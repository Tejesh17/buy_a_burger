import React, { Component } from "react"
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        'cheese': 1,
        'bacon': 1,
        'salad': 1,
        'meat':1
    }


    render() {
        return(
            <>
            <div>
                <Burger type = {this.state}/>
            </div>
            <div>
                Burger Builder
            </div>
            </>
        )
    }
}

export default BurgerBuilder