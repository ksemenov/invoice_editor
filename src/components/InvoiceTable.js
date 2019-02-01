import React from 'react';

import InvoiceItemsList from './InvoiceItemsList';
import InvoiceTotals from './InvoiceTotals';


class InvoiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
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
        <InvoiceItemsList items={this.state.items}/>
        <InvoiceTotals items={this.state.items}/>
      </table>
    )
  }
}

export default InvoiceTable
