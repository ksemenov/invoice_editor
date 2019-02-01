import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

import ConnectedInvoiceTable from './InvoiceTable';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Invoice Editor</h2>
        </div>

        { /* Insert your code here */}
        <ConnectedInvoiceTable />

        {/* <div>hello world</div> */}
      </div>
    );
  }
}


export default App;
