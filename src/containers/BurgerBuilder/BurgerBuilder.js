import React, { Component } from "react"
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'cheese': 0,
            'bacon': 0,
            'salad': 0,
            'meat':0
        }
    }

    render() {
        return(
            <>
                <Burger type = {this.state.ingredients}/>
                <BurgerControls></BurgerControls> 
            </>
        )
    }
}

export default BurgerBuilder