export const INVOICE_CREATION_FORM = 'invoice_creation_form';
export const INVOICE_LISTING = 'invoice_listing';
export const INVOICE_CREATION_FORM_HEADER = 'Invoice Creation';
export const INVOICE_LISTING_HEADER = 'Invoice List';
export const SERVER_URL = 'http://localhost:3001/invoices';

export const INVOICE_STATUS = {
	PENDING: 'Pending',
	APPROVED: 'Approved'
};

export const INVOICE_MANAGEMENT_ACTION = {
	LOAD_INVOICE_LISTING: 'LOAD_INVOICE_LISTING',
	ADD_INVOICE: 'ADD_INVOICE',
	DELETE_INVOICE: 'DELETE_INVOICE',
	PATCH_INVOICE: 'PATCH_INVOICE',
	EDIT_INVOICE: 'EDIT_INVOICE',
	LAUNCH_EDIT_INVOICE: 'LAUNCH_EDIT_INVOICE',
	CLEAR_ACTIVE_INVOICE: 'CLEAR_ACTIVE_INVOICE',
	SELECTED_TAB: 'SELECTED_TAB'
};

export const BUTTON_LABELS = {
	APPROVE: 'APPROVE',
	DELETE: 'DELETE',
	RESET: 'RESET',
	SUBMIT: 'SUBMIT'
};

// tag with error: for color blind users
export const ERROR_MESSAGE = {
	INVALID_INPUT: 'Error: Invalid input',
	INVALID_FORM: 'Error: Please fill all the fields'
};
