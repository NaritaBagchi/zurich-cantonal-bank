import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { createAccount }
			from '../../../actions/account_creation/AccountCreationActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('AccountCreationActions', () => {
	afterEach(() => {
    	fetchMock.reset()
    	fetchMock.restore()
  	});
	it('should invoke createAccount', () => {
		fetchMock.mock('http://localhost:3001/accounts', {
			body: {'accId': 9989899},
			headers: {
				'content-type': 'application/json',
				'location': 'localhost:3001/accounts/9989899'
			}
		});
		const store = mockStore({});
		return createAccount({accN: 1})
		.then((resp) => {
			expect(resp.accId).toEqual(9989899);
		});
	});
	it('should invoke createAccount error', () => {
		fetchMock.mock('http://localhost:3001/accounts', () => {
  			throw new Error('Error has occured');
		});
		const store = mockStore({});
		return createAccount({accN: 1})
		.then((err) => {
			expect(err.message).toEqual('Error has occured');
		});
	});
});