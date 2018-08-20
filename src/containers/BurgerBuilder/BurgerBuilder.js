import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PROCES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 4
  }

  updadePurchaseState = (ingredients) => {
    let sum = 0;
    const ingKeys = Object.keys(ingredients);
    for(let ingredient of ingKeys) {
      sum = sum + ingredients[ingredient];
    }
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PROCES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updadePurchaseState(updatedIngredients);
  }

  removeIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0 ) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PROCES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updadePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredienthandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
