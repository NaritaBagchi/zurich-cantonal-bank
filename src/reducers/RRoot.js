
const initialState = {
  formData: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ACCOUNT_CREATION_DRAFT":
      return Object.assign({}, state, {
      	formData: action.dataToUpdate
      });
    default: return state;
  }
}
