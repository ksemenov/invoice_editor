import React from 'react';

class InvoiceRow extends React.Component {
  constructor(props){
    super(props);

    this.onClickOnX = this.onClickOnX.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

//triggers invoice removal
  onClickOnX() {
    let invoiceIndex = parseInt(this.props.invoiceIndex);
    this.props.removeInvoice(invoiceIndex);
  }

// triggers item's name change
  handleNameChange(e, invoiceIndex){
    let name = e.target.value;
    this.props.updateItemName(invoiceIndex, name);
  }

//triggers itsm's quantity change
  handleQtyChange(e,invoiceIndex){
    let qty = e.target.value;
    this.props.updateItemQty(invoiceIndex, Math.floor(qty));
  }

//triggers item's price change
  handlePriceChange(e,invoiceIndex){
    let price = e.target.value;
    this.props.updateItemPrice(invoiceIndex, (Math.floor(price*100) /100));
  }

  render() {
    let invoiceIndex = this.props.invoiceIndex;
    let itemName = this.props.invoice.name;
    let qty = this.props.invoice.qty;
    let price = this.props.invoice.price;
    let total = this.props.invoice.total;


    return(
      <tr>
        <td><input type="text" placeholder="Item Name" value={itemName}
                    onChange={(e) => this.handleNameChange(e, invoiceIndex)}/>
        </td>
        <td>[ <input type="number" placeholder="0" min="0" value={qty}
                    onChange={(e) => this.handleQtyChange(e, invoiceIndex)}/> ]
        </td>
        <td>[ $<input type="number" placeholder="00.00" value={price}
                      onChange={(e) => this.handlePriceChange(e, invoiceIndex)}/> ]</td>
        <td>[ ${total} ]</td>
        <td onClick={this.onClickOnX}>x</td>
      </tr>
    )
  }
}

export default InvoiceRow
