import React from 'react';
import CPersonalInformation
			from '../../../../components/account_creation/sections/CPersonalInformation';

describe('<CPersonalInformation />', () => {
	const pInfo = {
		title: 'Ms',
		firstName: 'Narita',
		middleName: 'Mitra',
		lastName: 'Bagchi',
		homePhone: '5711135',
		mobilePhone: '9830453339',
		email: 'contactme@gmail.com',
		mailingAddress: 'City of Joy, Kolkata',
		ssn: '00000007',
	};
	const mockHandleChangeFn = jest.fn();
	const perSection = shallow(<CPersonalInformation personalInfo={pInfo}
													 handleChange={mockHandleChangeFn}/>);
	it('should render itself correctly', () => {
		expect(perSection.find('TextField').length).toEqual(9);
		perSection.find('TextField').forEach((field) => {
			switch(field.props().name) {
				case 'title': expect(field.props().defaultValue).toEqual('Ms'); break;
				case 'firstName': expect(field.props().defaultValue).toEqual('Narita'); break;
				case 'middleName': expect(field.props().defaultValue).toEqual('Mitra'); break;
				case 'lastName': expect(field.props().defaultValue).toEqual('Bagchi'); break;
				case 'homePhone': expect(field.props().defaultValue).toEqual('5711135'); break;
				case 'mobilePhone': expect(field.props().defaultValue).toEqual('9830453339'); break;
				case 'email': expect(field.props().defaultValue).toEqual('contactme@gmail.com'); break;
				case 'mailingAddress': expect(field.props().defaultValue).toEqual('City of Joy, Kolkata'); break;
				case 'ssn': expect(field.props().defaultValue).toEqual('00000007'); break;
			}
		});
	});
	it('should invoke the handle change when fields are changed', () => {
		perSection.find('TextField').at(0).props().onChange();
		expect(mockHandleChangeFn).toHaveBeenCalled();
	});
}); 