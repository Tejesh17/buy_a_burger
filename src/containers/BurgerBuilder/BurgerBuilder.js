import React, { Component } from "react"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 25,
    meat: 75,
    bacon:60
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'cheese': 0,
            'bacon': 0,
            'salad': 0,
            'meat':0
        },
        totalPrice: 50,
        purchaseable: false 
    }

    
    isPurchaseable (ingredients) {
        
        const sum = Object.keys (ingredients)
            .map((keys)=> {
                return ingredients[keys]
            })
            .reduce ((sum, prev) =>{
                sum += prev
                return sum 

            }, 0)
        this.setState({purchaseable: sum>0})
    }

    addIngHandler = (ing) =>{
        const ingredientCount= this.state.ingredients[ing]
        const newCount = ingredientCount+1
        const updatedIng = {
            ...this.state.ingredients
        }
        updatedIng[ing] = newCount
        let currentPrice = INGREDIENT_PRICES[ing]
        let newPrice = this.state.totalPrice + currentPrice

        this.setState({
            ingredients: updatedIng, 
            totalPrice: newPrice
        })
        this.isPurchaseable(updatedIng)
    }

    remIngHandler = (ing) => {
        const ingredientCount = this.state.ingredients[ing]
        const newCount = ingredientCount-1 
        if (newCount <0) {
            return;
        }
        const updatedIng = {
            ...this.state.ingredients
        }
        updatedIng[ing] = newCount
        const currentPrice = INGREDIENT_PRICES[ing]
        const newPrice = this.state.totalPrice - currentPrice
        this.setState({
            ingredients:updatedIng,
            totalPrice: newPrice
        })
        this.isPurchaseable(updatedIng)
    }

    render() {

    const isDisabled = {
        ...this.state.ingredients
    }
    for (let key in isDisabled){
        isDisabled[key] = isDisabled[key] <= 0
    }
        return(
            <>
                <Modal><OrderSummary ingredients= {this.state.ingredients}></OrderSummary></Modal>
                <Burger type = {this.state.ingredients}/>
                <BuildControls 
                    price= {this.state.totalPrice}
                    addIng = {this.addIngHandler} 
                    remIng = {this.remIngHandler}
                    isDisabled = {isDisabled}
                    isPurchaseable= {this.state.purchaseable}
                />
            </>
        )
    }
}

export default BurgerBuilder