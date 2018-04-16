import update from 'immutability-helper';
import { INVOICE_CREATION_FORM, INVOICE_STATUS, INVOICE_MANAGEMENT_ACTION } from '../../Constants';

const initialState = {
  invoiceList: [],
  activeInvoice: {
    iNumber: '',
    amount: '',
    customerNumber: '',
    customerCounty: '',
    iLineItems: '',
    invoiceCopy: '',
    status: INVOICE_STATUS.PENDING,
  }, 
  selectedTab: INVOICE_CREATION_FORM,
  editMode: false
};

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_MANAGEMENT_ACTION.LOAD_INVOICE_LISTING:
      const updatedState = update(state, {
        invoiceList: {$set: action.invoices}
      });
      return updatedState;
    case INVOICE_MANAGEMENT_ACTION.ADD_INVOICE: {
      const updatedState = update(state, {
        invoiceList: {$push: [action.invoice]},
        activeInvoice: {$set: initialState.activeInvoice}
      });
      return updatedState;
    }
    case INVOICE_MANAGEMENT_ACTION.DELETE_INVOICE: {
      const index = state.invoiceList.findIndex(invoice => invoice.id === action.invoice.id);
      const updatedState = update(state, {
       invoiceList: {$splice: [[index, 1]]}
      });
      return updatedState;
    }
    case INVOICE_MANAGEMENT_ACTION.PATCH_INVOICE: {
      const index = state.invoiceList.findIndex(invoice => invoice.id === action.invoice.id);
      const updatedState = update(state, {
        invoiceList: {[index]: {$set: action.invoice.entity}}
      });
      return updatedState;
    }
    case INVOICE_MANAGEMENT_ACTION.EDIT_INVOICE: {
      const index = state.invoiceList.findIndex(invoice => invoice.id === action.invoice.id);
      const updatedState = update(state, {
        invoiceList: {[index]: {$set: action.invoice}}
      });
      return update(updatedState, {
        activeInvoice: {$set: initialState.activeInvoice},
        editMode: {$set: initialState.editMode}
      });
    }
    case INVOICE_MANAGEMENT_ACTION.LAUNCH_EDIT_INVOICE: {
      const updatedState = update(state, {
        activeInvoice: {$set: action.invoice},
        selectedTab: {$set: INVOICE_CREATION_FORM},
        editMode: {$set: true}
      });
      return updatedState;
    }
    case INVOICE_MANAGEMENT_ACTION.SELECTED_TAB: {
      const updatedState = update(state, {
        selectedTab: {$set: action.tabValue}
      });
      return updatedState;
    }
    default: return state;
  }
};
