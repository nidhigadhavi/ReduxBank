  import React, { Component } from 'react';
//import  render  from 'redux';
import propTypes from 'prop-types';

import bankStore from './bankStore';
import constants from './constants';

import logo from './logo.svg';
import './App.css';

class BankApp extends Component {

  handleDeposite() {
    console.log("deposited");
    console.log(this.refs.amount.value);
    this.props.onDeposit(this.refs.amount.value);
    console.log("now balnce is..." + this.props.balance);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div>
        <header>
          <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />Redux Bank
        </header>
        <h1> Your Balance is ${(this.props.balance)}</h1>
        <div className="atm">
          <input type="text" placeholder="enter ammount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>WithDraw</button>
          <button onClick={this.handleDeposite.bind(this)}>Deposite</button>
        </div>
      </div>
    );
  }
}

BankApp.propTypes = {
  balance: propTypes.number,
  onWithdraw: propTypes.func,
  onDeposit: propTypes.func
}

class BankAppContainer extends Component {
  constructor(props) {
    super(props);
    bankStore.dispatch({ type: constants.CREATE_ACC });
    this.state = {
      balance: bankStore.getState().balance
    }
  }

  componentDidMount() {
    bankStore.subscribe(() =>
      this.setState({ balance: bankStore.getState().balance })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <BankApp
        balance={bankStore.getState().balance}
        onDeposit={(amount) => bankStore.dispatch(
          { type: constants.DEPOSITE_INTO_ACC, amount: amount })}
        onWithdraw={(amount) => bankStore.dispatch(
          { type: constants.WITHDRAW_FROM_ACC, amount: amount })}
      />
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>

//       </div>
//     );
//   }
// }

export default BankAppContainer;
