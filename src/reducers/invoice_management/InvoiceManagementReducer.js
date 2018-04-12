
const initialState = {
  invoiceList: [],
};

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INVOICE_LISTING":
      return Object.assign({}, state, {
      	invoiceList: action.invoices
      });
    default: return state;
  }
};
