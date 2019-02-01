import React from 'react';

import InvoiceItemsList from './InvoiceItemsList';
import InvoiceTotals from './InvoiceTotals';


class InvoiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
      tax: 5,
    }

    this.addInvoice = this.addInvoice.bind(this);
    this.removeInvoice = this.removeInvoice.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
    this.updateItemQty = this.updateItemQty.bind(this);
    this.updateItemPrice = this.updateItemPrice.bind(this);
    this.updateTaxRate = this.updateTaxRate.bind(this);
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

//dynamically updates item's name in a specific invoice
  updateItemName(invoiceIndex, name){
    let invoices = this.state.invoices.slice();
    let updatedInvoice = invoices[invoiceIndex];
    updatedInvoice.name = name;
    invoices[invoiceIndex] = updatedInvoice;
    this.setState({invoices: invoices});
  }

  //dynamically updates item's quantity in a specific invoice
  updateItemQty(invoiceIndex, qty){
    let invoices = this.state.invoices.slice();
    let updatedInvoice = invoices[invoiceIndex];
    updatedInvoice.qty = qty;
    updatedInvoice.total = (updatedInvoice.price*qty).toFixed(2);
    invoices[invoiceIndex] = updatedInvoice;
    this.setState({invoices: invoices});
  }

  //dynamically updates item's price in a specific invoice
  updateItemPrice(invoiceIndex, price){
    let invoices = this.state.invoices.slice();
    let updatedInvoice = invoices[invoiceIndex];
    updatedInvoice.price = price;
    updatedInvoice.total = (updatedInvoice.qty*price).toFixed(2);
    invoices[invoiceIndex] = updatedInvoice;
    this.setState({invoices: invoices});
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
        <InvoiceItemsList invoices={this.state.invoices}
                          addInvoice={this.addInvoice}
                          removeInvoice={this.removeInvoice}
                          updateItemName={this.updateItemName}
                          updateItemQty={this.updateItemQty}
                          updateItemPrice={this.updateItemPrice}/>
        <InvoiceTotals invoices={this.state.invoices}
                        updateTaxRate={this.updateTaxRate}
                        tax={this.state.tax}/>
      </table>
    )
  }
}

export default InvoiceTable
