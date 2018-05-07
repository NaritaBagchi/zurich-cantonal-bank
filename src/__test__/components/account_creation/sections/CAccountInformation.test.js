import React from 'react';
import CAccountInformation
			from '../../../../components/account_creation/sections/CAccountInformation';

describe('<CAccountInformation />', () => {
	const accountInfo = {
		accType: 5,
		purpose: 'Salary',
		depositSource: 'Company Finance',
		infoSource: 'Newspaper',
	};
	const mockHandleChangeFn = jest.fn();
	const accInfoSection = shallow(<CAccountInformation
										accountInfo={accountInfo}
										handleChange={mockHandleChangeFn} />);
	it('should render itself correctly', () => {
		expect(accInfoSection.find('SelectField').props().value).toEqual(5);
		expect(accInfoSection.find('TextField').length).toEqual(3);
		accInfoSection.find('TextField').forEach((field) => {
			switch(field.props().name) {
				case 'purpose': expect(field.props().defaultValue).toEqual('Salary'); break;
				case 'depositSource': expect(field.props().defaultValue).toEqual('Company Finance'); break;
				case 'infoSource': expect(field.props().defaultValue).toEqual('Newspaper'); break;
			}
		});
	});
	it('should invoke the handle change when fields are changed', () => {
		accInfoSection.find('SelectField').props().onChange();
		expect(mockHandleChangeFn).toHaveBeenCalled();
		accInfoSection.find('TextField').at(0).props().onChange();
		expect(mockHandleChangeFn).toHaveBeenCalled();
	});
}); 