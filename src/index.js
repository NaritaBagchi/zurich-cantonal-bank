import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {IntlProvider, FormattedMessage} from 'react-intl';
import CAccountCreation from './components/CAccountCreation';
import CHomePage from './components/CHomePage';
import { rootReducer } from './reducers/RRoot';

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware));

render(
<Router>
	<MuiThemeProvider>
	  <Provider store={store}>
	  <Switch>
	    <Route exact path="/" component={CHomePage} />
        <Route path="/list" component={CAccountCreation} />
	  </Switch>
	  </Provider>
	</MuiThemeProvider>
</Router>,
  document.getElementById('root')
);
