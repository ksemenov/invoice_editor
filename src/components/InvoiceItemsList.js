import React from 'react';

import InvoiceRow from './InvoiceRow';

class InvoiceItemsList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    if (this.props.items){
      let items = this.props.items.map((item,index) => {
        return (
          <InvoiceRow key={index} item={item} index={index} />
        );
      });
      return (
        <tbody>
          {items}
          <tr>
            <td>[ New Item ]</td>
            <td>[ ]</td>
            <td>[ ]</td>
            <td>[ ]</td>
            <td></td>
          </tr>
        </tbody>
      )

    }

  }
}

export default InvoiceItemsList
