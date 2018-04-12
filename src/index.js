import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import { rootReducer } from './reducers/RRoot';
import { invoiceReducer } from './reducers/invoice_management/InvoiceManagementReducer';
import CAccountCreationHomePage from './components/account_creation/CAccountCreationHomePage';
import CInvoiceHomePage from './components/invoice_management/CInvoiceHomePage';

const store = createStore(
	invoiceReducer,
	applyMiddleware(thunkMiddleware));

render(
<Router>
	<MuiThemeProvider>
	  <Provider store={store}>
	  <Switch>
	    <Route exact path="/account_creation" component={CAccountCreationHomePage} />
    	<Route path="/invoice_management" component={CInvoiceHomePage} />    
	  </Switch>
	  </Provider>
	</MuiThemeProvider>
</Router>,
  document.getElementById('root')
);
