import  { createStore }  from 'redux';
import  BankReducer  from './reducers/bankReducer';


 const bankStore = createStore ( BankReducer );

 export default bankStore;