import React from 'react';

import InvoiceItemsList from './InvoiceItemsList';
import InvoiceTotals from './InvoiceTotals';

//redux
import { connect } from "react-redux";
import { addInvoice, removeInvoice, updateName, updateQty, updatePrice } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
    tax: state.tax,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInvoice: () => dispatch({type: "ADD_INVOICE"}),
    removeInvoice: (index) => dispatch({type: "REMOVE_INVOICE"}),
    // updateName: (data) => dispatch({type: 'UPDATE_NAME'}),
    // updateQty: (index, qty) => dispatch({type: "UPDATE_QTY", qty}),
    // updatePrice: (index, price) => dispatch({type: "updatePrice"}),
  }
}

class InvoiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // invoices: [],
      tax: 5,
    }

    this.addInvoice = this.addInvoice.bind(this);
    this.removeInvoice = this.removeInvoice.bind(this);
    // this.updateItemName = this.updateItemName.bind(this);
    // this.updateItemQty = this.updateItemQty.bind(this);
    // this.updateItemPrice = this.updateItemPrice.bind(this);
    this.updateTaxRate = this.updateTaxRate.bind(this);
  }

// creates a new invoice object and adds to invoice list
  // addInvoice() {
  //   let invoices = this.state.invoices.slice();
  //   invoices.push({
  //       name: '',
  //       qty: '',
  //       price: '',
  //       total: 0,
  //   });
  //   this.setState({invoices: invoices});
  // }

  addInvoice() {
    this.props.addInvoice();
  }

// removes a specific invoice from the invoice list
  // removeInvoice(invoiceIndex) {
  //   let invoices = this.state.invoices.slice();
  //   invoices.splice(invoiceIndex,1);
  //   this.setState({invoices: invoices});
  // }

  removeInvoice(itemIndex) {
    this.props.removeInvoice(itemIndex);
  }



//dynamically updates item's name in a specific invoice
  // updateItemName(invoiceIndex, name){
  //   let invoices = this.state.invoices.slice();
  //   let updatedInvoice = invoices[invoiceIndex];
  //   updatedInvoice.name = name;
  //   invoices[invoiceIndex] = updatedInvoice;
  //   this.setState({invoices: invoices});
  // }

  changeItemName(index, name) {
    // let packedData = {index: index, name: name};
    // this.props.updateName(index);
  }

  //dynamically updates item's quantity in a specific invoice
  // updateItemQty(invoiceIndex, qty){
  //   let invoices = this.state.invoices.slice();
  //   let updatedInvoice = invoices[invoiceIndex];
  //   updatedInvoice.qty = qty;
  //   updatedInvoice.total = (updatedInvoice.price*qty).toFixed(2);
  //   invoices[invoiceIndex] = updatedInvoice;
  //   this.setState({invoices: invoices});
  // }

  changeItemQty(itemIndex, qty) {
    // this.props.updateQty(itemIndex, qty);
  }

  //dynamically updates item's price in a specific invoice
  // updateItemPrice(invoiceIndex, price){
  //   let invoices = this.state.invoices.slice();
  //   let updatedInvoice = invoices[invoiceIndex];
  //   updatedInvoice.price = price;
  //   updatedInvoice.total = (updatedInvoice.qty*price).toFixed(2);
  //   invoices[invoiceIndex] = updatedInvoice;
  //   this.setState({invoices: invoices});
  // }

  changeItemPrice(itemIndex, price) {
    // this.props.updatePrice(itemIndex, price);
  }

//dynamically updates tax rate
  updateTaxRate(rate) {
    this.setState({tax: rate});
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <InvoiceItemsList invoices={this.props.invoices}
                          addInvoice={this.addInvoice}
                          removeInvoice={this.removeInvoice}
                          updateItemName={this.updateItemName}
                          updateItemQty={this.updateItemQty}
                          updateItemPrice={this.updateItemPrice}/>
        <InvoiceTotals invoices={this.props.invoices}
                        updateTaxRate={this.updateTaxRate}
                        tax={this.state.tax}/>
      </table>
    )
  }
}

// export default InvoiceTable

const ConnectedInvoiceTable = connect(mapStateToProps, mapDispatchToProps)(InvoiceTable)

export default ConnectedInvoiceTable
