import React from 'react';
import CEmploymentInformation
			from '../../../../components/account_creation/sections/CEmploymentInformation';

describe('<CEmploymentInformation />', () => {
	const eInfo = {
		employerName: 'Fortune Inc',
		address: 'Manhattan, USA',
		workPhone: '61 90909090',
		jobPosition: 'Director',
	};
	const mockHandleChangeFn = jest.fn();
	const empSection = shallow(<CEmploymentInformation 	employmentInfo={eInfo}
														handleChange={mockHandleChangeFn}/>);
	it('should render itself correctly', () => {
		expect(empSection.find('TextField').length).toEqual(4);
		empSection.find('TextField').forEach((field) => {
			switch(field.props().name) {
				case 'employerName': expect(field.props().defaultValue).toEqual('Fortune Inc'); break;
				case 'address': expect(field.props().defaultValue).toEqual('Manhattan, USA'); break;
				case 'workPhone': expect(field.props().defaultValue).toEqual('61 90909090'); break;
				case 'jobPosition': expect(field.props().defaultValue).toEqual('Director'); break;
			}
		});
	});
	it('should invoke the handle change when fields are changed', () => {
		empSection.find('TextField').at(0).props().onChange();
		expect(mockHandleChangeFn).toHaveBeenCalled();
	});
}); 