import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CAccountCreationHomePage
			from '../../../components/account_creation/CAccountCreationHomePage';

describe('<CAccountCreationHomePage />', () => {
	let accHomePage;
	beforeEach(() => {
		accHomePage = shallow(<CAccountCreationHomePage />);
	});
	afterEach(() => {
		accHomePage.unmount();
	});
	it('should render ToastContainer correctly', () => {
		expect(accHomePage.find('ToastContainer').length).toEqual(1);
		expect(accHomePage.find('CTermsPage').length).toEqual(0);
		expect(accHomePage.find('CAccountCreation').length).toEqual(0);
		expect(accHomePage.find('h1').length).toEqual(0);
	});
	it('should render CTermsPage correctly', () => {
		accHomePage.setState({
			showTermsPage: true
    	});
    	// localStorage.setItem('showTermsPage', true);
		expect(accHomePage.find('CTermsPage').length).toEqual(1);
		expect(accHomePage.find('CAccountCreation').length).toEqual(0);
		expect(accHomePage.find('h1').length).toEqual(0);
	});
	it('should hide CTermsPage on invoking handleAgree', () => {
		accHomePage.setState({
			showTermsPage: true
    	});
		accHomePage.find('CTermsPage').props().handleAgree();
		accHomePage.update();
		expect(accHomePage.find('CTermsPage').length).toEqual(0);
		expect(accHomePage.find('Connect(CAccountCreation)').length).toEqual(1);
		expect(accHomePage.find('h1').length).toEqual(0);
    });
    it('should show default text on invoking handleDecline', () => {
		accHomePage.setState({
			showTermsPage: true
    	});
		accHomePage.find('CTermsPage').props().handleDecline();
		accHomePage.update();
		expect(accHomePage.find('CTermsPage').length).toEqual(0);
		expect(accHomePage.find('Connect(CAccountCreation)').length).toEqual(0);
		expect(accHomePage.find('h1').length).toEqual(1);
    });
	it('should render default text correctly', () => {
		accHomePage.setState({
			showDefaultText: true
    	});
		expect(accHomePage.find('h1').length).toEqual(1);
	});
	it('should render default screen, if showTermsPage in localStorage is null', () => {
		accHomePage.unmount();
		localStorage.setItem('showTermsPage', null);
		accHomePage = mount(<MuiThemeProvider>
								<CAccountCreationHomePage/>
							</MuiThemeProvider>);
		expect(accHomePage.find('CTermsPage').length).toEqual(1);
	});
});