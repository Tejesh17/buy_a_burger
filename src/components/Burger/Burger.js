import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    const ingredients = Object.keys(props.type).map((index)=>{
            return  [...Array(props.type[index])].map((__, id)=>{
                return <BurgerIngredient id= {index + id } type = {index} /> 
            })
        })
    

    return (
        <>
        <div className={styles.Burger}>
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            {ingredients}
            <BurgerIngredient type ='bread-bottom'></BurgerIngredient>
        </div>
        </>
    )
}

export default burger