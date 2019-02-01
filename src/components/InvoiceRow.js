import React from 'react';

class InvoiceRow extends React.Component {
  constructor(props){
    super(props);

    this.onClickOnX = this.onClickOnX.bind(this);
  }

//triggers invoice removal
  onClickOnX() {
    let index = parseInt(this.props.index);
    this.props.removeInvoice(index);
  }

  // handleNameChage(){
  //
  // }

  // handleQtyChange() {
  //
  // }

  // handlePriceChange() {
  //
  // }

  render() {
    return(
      <tr>
        <td><input type="text" placeholder="Item Name" /></td>
        <td>[ <input type="number" placeholder="0" min="0" /> ]</td>
        <td>[ $<input type="number" placeholder="00.00"/> ]</td>
        <td>[ $ ]</td>
        <td onClick={this.onClickOnX}>x</td>
      </tr>
    )
  }
}

export default InvoiceRow
