import React from 'react';
import CTermsPage
			from '../../../components/account_creation/CTermsPage';

describe('<CTermsPage />', () => {
	const termsPage = shallow(<CTermsPage/>);
	it('should render itself correctly', () => {
		expect(termsPage.find('Dialog').length).toEqual(1);
	});
});