import React from 'react';

import InvoiceRow from './InvoiceRow';

class InvoiceItemsList extends React.Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);

  }

  onClick(){
    this.props.addInvoice();
  }

  render() {

    if (this.props.invoices){
      let invoices = this.props.invoices.map((invoice,index) => {
        return (
          <InvoiceRow key={index} invoice={invoice} invoiceIndex={index}
                      removeInvoice={this.props.removeInvoice}
                      updateItemName={this.props.updateItemName}
                      updateItemQty={this.props.updateItemQty}
                      updateItemPrice={this.props.updateItemPrice}/>
        );
      });
      return (
        <tbody>
          {invoices}
          <tr onClick={this.onClick}>
            <td className="item-col">[ New Item ]</td>
            <td></td>
            <td colSpan="2"></td>
            <td colSpan="2"></td>
            <td></td>
          </tr>
        </tbody>
      )

    } else {
      return (
        <tbody>
          <tr onClick={this.onClick} className="item-col">
            <td>[ New Item ]</td>
            <td></td>
            <td colSpan="2"></td>
            <td>[</td>
            <td></td>
          </tr>
        </tbody>
      )
    }

  }
}

export default InvoiceItemsList
