import React from 'react';
import CDocumentation
			from '../../../../components/account_creation/sections/CDocumentation';

describe('<CDocumentation />', () => {
	const docInfo = {
		utilBillCopy: 'march2018.pdf',
		ssnCopy: 'ssnPhoto.jpeg',
	};
	const mockHandleChangeFn = jest.fn();
	const docSection = shallow(<CDocumentation 	documentation={docInfo}
												handleChange={mockHandleChangeFn}/>);
	it('should render itself correctly', () => {
		expect(docSection.find('TextField').length).toEqual(2);
		docSection.find('TextField').forEach((field) => {
			switch(field.props().name) {
				case 'utilBillCopy': expect(field.props().value).toEqual('march2018.pdf'); break;
				case 'ssnCopy': expect(field.props().value).toEqual('ssnPhoto.jpeg'); break;
			}
		});
	});
	it('should invoke the handle change when fields are changed', () => {
		docSection.find('input').at(0).simulate('change', {
			target: {
				files: ['file1', 'file2'],
			}
		});
		docSection.find('input').at(1).simulate('change', {
			target: {
				files: ['file1', 'file2'],
			}
		});
		expect(mockHandleChangeFn.mock.calls.length).toEqual(2);
	});
}); 