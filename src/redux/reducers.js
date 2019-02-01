// import { combineReducers, applyMiddleware } from 'redux'

import {ADD_INVOICE, REMOVE_INVOICE, UPDATE_NAME, UPDATE_QTY, UPDATE_PRICE} from "./action-types"


const initialState = {
  invoices: [],
  tax: 5,
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
      case ADD_INVOICE:
          let invoices = state.invoices.slice();
          invoices.push({name: '', qty: '', price: '', total: 0});
          return Object.assign({}, state, {invoices: invoices});
          break;

      case REMOVE_INVOICE:
          invoices = state.invoices.slice();
          invoices.splice(action.index,1);
          return Object.assign({}, state, {invoices: invoices});
          break;

      case UPDATE_NAME:
          invoices = state.invoices.slice();
          let updatedInvoice = invoices[action.index];
          updatedInvoice.name = action.name;
          invoices[action.index] = updatedInvoice;
          return Object.assign({}, state, {invoices: invoices});
          break;

      case UPDATE_QTY:
          invoices = state.invoices.slice();
          updatedInvoice = invoices[action.index];
          updatedInvoice.qty = action.qty;
          updatedInvoice.total = (updatedInvoice.price*action.qty).toFixed(2);
          invoices[action.index] = updatedInvoice;
          return Object.assign({}, state, {invoices: invoices});
          break;

      case UPDATE_PRICE:
          invoices = state.invoices.slice();
          updatedInvoice = invoices[action.index];
          updatedInvoice.price = action.price;
          updatedInvoice.total = (updatedInvoice.qty*action.price).toFixed(2);
          invoices[action.index] = updatedInvoice;
          return Object.assign({}, state, {invoices: invoices});
          break;

      default:
        return state;
    }
};


export default rootReducer;
