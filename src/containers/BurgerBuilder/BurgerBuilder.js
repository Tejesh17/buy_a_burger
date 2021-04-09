import React, { Component } from "react"

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

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
        purchaseable: false ,
        purchasing: false,
        showSpinner: false,
    }

    
    
    isPurchaseable (ingredients) {
        
        const sum = Object.keys (ingredients)
            .map((keys)=> {
                return ingredients[keys]
            })
            .reduce ((sum, prev) =>{
                sum += prev
                return sum 

            }, 0);
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

    purchaseHandler =() =>   this.setState({purchasing: true})
    backDropClickHandler = () => this.setState ({purchasing: false})

    continueOrderHandler = () => {
        this.setState({showSpinner:true})
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Tejesh',
                address: {
                    street: 'poopoopeepee',
                    city: 'bangalore',
                    zip: 5600
                },
                email: 'hello@hello.com'
            },
            delivery: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(res => {
            console.log(res);
        this.setState({showSpinner:false, purchasing:false})
        })
        .catch(e => {
            console.log(e);
            this.setState({showSpinner:false, purchasing:false})
        })
    } 
    
    render() {

    const isDisabled = {
        ...this.state.ingredients
    }
    for (let key in isDisabled){
        isDisabled[key] = isDisabled[key] <= 0
    }
    
    let orderSum =''

    if(this.state.showSpinner){
        orderSum = <Spinner></Spinner> 
    } else {
        orderSum = 
                    <OrderSummary 
                        ingredients= {this.state.ingredients} 
                        continue = {this.continueOrderHandler}
                        cancel = {this.backDropClickHandler}
                        totalPrice= {this.state.totalPrice}>
                    </OrderSummary>
    }
        return(
            <>
                <Backdrop show = {this.state.purchasing} Click = {this.backDropClickHandler}> </Backdrop>
                <Modal show= {this.state.purchasing} >
                    {orderSum}
                </Modal>
                <Burger type = {this.state.ingredients}/>
                <BuildControls 
                    price= {this.state.totalPrice}
                    addIng = {this.addIngHandler} 
                    remIng = {this.remIngHandler}
                    isDisabled = {isDisabled}
                    isPurchaseable= {this.state.purchaseable}
                    ordered = {this.purchaseHandler}
                />
            </>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)