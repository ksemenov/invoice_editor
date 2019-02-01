import React from 'react';

import InvoiceItemsList from './InvoiceItemsList';
import InvoiceTotals from './InvoiceTotals';


class InvoiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
    }

    this.addInvoice = this.addInvoice.bind(this);
    this.removeInvoice = this.removeInvoice.bind(this);


  }

// creates a new invoice object and adds to invoice list
  addInvoice() {
    let invoices = this.state.invoices.slice();
    invoices.push({
        name: '',
        qty: '',
        price: '',
        total: 0,
    });
    this.setState({invoices: invoices});
  }

// removes a specific invoice from the invoice list
  removeInvoice(invoiceIndex) {
    let invoices = this.state.invoices.slice();
    invoices.splice(invoiceIndex,1);
    this.setState({invoices: invoices});
  }

  // updateItemName(){
  //
  // }

  // updateItemQty(){
  //
  // }

  // updateItemPrice() {
  //
  // }

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
        <InvoiceItemsList invoices={this.state.invoices}
                          addInvoice={this.addInvoice}
                          removeInvoice={this.removeInvoice}/>
        <InvoiceTotals invoices={this.state.invoices}/>
      </table>
    )
  }
}

export default InvoiceTable
