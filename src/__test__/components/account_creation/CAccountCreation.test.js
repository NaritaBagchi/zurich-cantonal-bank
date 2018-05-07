import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CAccountCreation }
			from '../../../components/account_creation/CAccountCreation';

describe('<CAccountCreation />', () => {
	jest.useFakeTimers();
	const mockCreateAccountFn = jest.fn();

	let accCreation;
	// const mockCreateAccountFn = jest.spyOn(accCreation, createAccount);
	// Simple snapshot test for a container - 
	// CAN'T due to random id generatino by MUI
	/*	it('should render itself correctly', () => {
		const accCreationTree = renderer.create(
			<MuiThemeProvider>
				<CAccountCreation createAccount={mockCreateAccountFn}/>
			</MuiThemeProvider>);
		expect(accCreationTree.toJSON()).toMatchSnapshot();
	});*/

	beforeEach(() => {
		accCreation = mount(
			<MuiThemeProvider>
				<CAccountCreation createAccount={mockCreateAccountFn}/>
			</MuiThemeProvider>
		);
	});

	afterEach(() => {
		accCreation.unmount();
	});

	it('should render first step as active', () => {
		expect(accCreation.find('Stepper').props().activeStep).toEqual(0);
	});

	it('should invoke handleNext, when next button is clicked', () => {
		expect(accCreation.find('CPersonalInformation').length).toEqual(1);
		expect(accCreation.find('CEmploymentInformation').length).toEqual(0);

		accCreation.find('RaisedButton').props().onClick();
		accCreation.update();

		expect(accCreation.find('CPersonalInformation').length).toEqual(0);
		expect(accCreation.find('CEmploymentInformation').length).toEqual(1);
	});

	it('should invoke handlePrev, when back button is clicked', () => {

		accCreation.find('RaisedButton').props().onClick();
		accCreation.update();

		expect(accCreation.find('CPersonalInformation').length).toEqual(0);
		expect(accCreation.find('CEmploymentInformation').length).toEqual(1);

		accCreation.find('FlatButton').props().onClick();
		accCreation.update();

		expect(accCreation.find('CPersonalInformation').length).toEqual(1);
		expect(accCreation.find('CEmploymentInformation').length).toEqual(0);

		accCreation.find('FlatButton').props().onClick();
		accCreation.update();

		expect(accCreation.find('CPersonalInformation').length).toEqual(1);
		expect(accCreation.find('CEmploymentInformation').length).toEqual(0);
	});

	it('should invoke createAccount, when finish button is clicked', () => {
		accCreation.find('RaisedButton').props().onClick();
		accCreation.find('RaisedButton').props().onClick();
		accCreation.find('RaisedButton').props().onClick();
		accCreation.find('RaisedButton').props().onClick();

		accCreation.update();

		expect(mockCreateAccountFn.mock.calls.length).toEqual(1);
	});

	it('should invoke saveDraft, periodically', () => {
		jest.advanceTimersByTime(6000);
		expect(setInterval).toHaveBeenCalledTimes(5);
	});
});

