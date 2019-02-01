import React from 'react';

class InvoiceTotals extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    return(
      <tfoot>
        <tr>
          <td colSpan="2"></td>
          <th>Subtotal</th>
          <td colSpan="2" >$0.00</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <th>Tax (5%)</th>
          <td colSpan="2">$0.00</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <th>Total</th>
          <td colSpan="2">$0.00</td>
        </tr>
      </tfoot>
    )
  }
}

export default InvoiceTotals
