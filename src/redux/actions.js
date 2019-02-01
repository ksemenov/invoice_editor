import {ADD_INVOICE, REMOVE_INVOICE, UPDATE_NAME, UPDATE_QTY, UPDATE_PRICE} from "./action-types"


const addInvoice = (item) => {
  return {
    type: ADD_INVOICE,
    item
  }
};

const removeInvoice = (index) =>{
  return {
    type: REMOVE_INVOICE,
    index

  }
}

// const updateName = (index, name) => {
//   return {
//     type: UPDATE_NAME,
//     data
//   }
// }
//
// const updateQty = (index, qty) => {
//   return {
//     type: UPDATE_QTY,
//     index: 0,
//     qty: 7
//   }
// }
//
// const updatePrice = (index, price) => {
//   return {
//     type: UPDATE_PRICE,
//     index,
//     price,
//   }
// }



export { addInvoice, removeInvoice};
