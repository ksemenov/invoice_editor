import React from 'react';

class InvoiceTotals extends React.Component{
  constructor(props){
    super(props);

    this.handleTaxChange = this.handleTaxChange.bind(this);
  }

//triggers tax rate update
  handleTaxChange(e) {
    let taxRate = e.target.value;
    this.props.updateTaxRate(taxRate);
  }

  render() {
    let subtotal = 0;
    let tax = this.props.tax;
    let invoices = this.props.invoices;
    if(invoices.length !=0 ){
      let allTotals = invoices.map((invoice) => parseFloat(invoice.total));
      subtotal = allTotals.reduce((total, num) => total+num);
    }
    let taxed = (tax / 100) * subtotal;
    let finalTotal = subtotal + taxed;
    return(
      <tfoot>
        <tr>
          <td colSpan="2"></td>
          <th>Subtotal</th>
          <td colSpan="2" >${subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <th>Tax (<input type="number" style={{width: 40}} min="0" max="100" value={tax}
                          onChange={this.handleTaxChange}/>%)</th>
          <td colSpan="2">${taxed.toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <th>Total</th>
          <td colSpan="2">${finalTotal.toFixed(2)}</td>
        </tr>
      </tfoot>
    )
  }
}

export default InvoiceTotals
