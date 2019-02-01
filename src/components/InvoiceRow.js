import React from 'react';

class InvoiceRow extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    return(
      <tr>
        <td><input type="text" placeholder="Item Name" /></td>
        <td>[ <input type="number" placeholder="0" min="0" /> ]</td>
        <td>[ $<input type="number" placeholder="00.00"/> ]</td>
        <td>[ $ ]</td>
        <td>x</td>
      </tr>
    )
  }
}

export default InvoiceRow
