import constants from '../constants';

const initialState = {
	balance :0
}

const BankReducer = (state, action) => {

	console.log("into reducer...");
	console.log(action);

	switch(action.type){

		case constants.CREATE_ACC :
		   return initialState;

		case constants.WITHDRAW_FROM_ACC:
			return { balance: state.balance + parseInt(action.amount)};

		case constants.DEPOSITE_INTO_ACC:
			return { balance: state.balnce - parseInt(action.amount)};

		default : return state;

	}

}

export default BankReducer;