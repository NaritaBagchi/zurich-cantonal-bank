import { toast } from 'react-toastify';
import { INVOICE_MANAGEMENT_ACTION, SERVER_URL } from '../../Constants';

function loadInvoiceListing(invoices) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.LOAD_INVOICE_LISTING,
    invoices
  }
}

function addInvoice(invoice) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.ADD_INVOICE,
    invoice
  }
}

function removeInvoice(invoice) {  
  return {
    type: INVOICE_MANAGEMENT_ACTION.DELETE_INVOICE,
    invoice
  }
}

function updatePatchedInvoice(invoice) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.PATCH_INVOICE,
    invoice
  }
}

function updateEditedInvoice(invoice) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.EDIT_INVOICE,
    invoice
  }
}

export function launchEditInvoice(invoice) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.LAUNCH_EDIT_INVOICE,
    invoice
  }
}

export function selectTab(tabValue) {
  return {
    type: INVOICE_MANAGEMENT_ACTION.SELECTED_TAB,
    tabValue
  }
}

export function clearActiveInvoice() {
  return {
    type: INVOICE_MANAGEMENT_ACTION.CLEAR_ACTIVE_INVOICE
  }
}

export function fetchInvoiceList(data) {
  return function (dispatch) {
    fetch(SERVER_URL)
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
          dispatch(loadInvoiceListing(data));
      });
    };
}

// Invoice creation.
export function postInvoice(invoice) {
	return function (dispatch) {
		fetch(SERVER_URL, {
        method: 'post',
        body: JSON.stringify(invoice),
        headers: {
          'content-type': 'application/json'
        }
      })
    	.then(
        function(resp) {
          dispatch(addInvoice(invoice));
          toast.info("Invoice Uploaded !");
        return resp.json();
      }, function(resp) {
          toast.error("Error Uploading Invoice !");
        return resp.json();
      });
    };
}

// json-server patch of specific fields are giving error,
// hence the need to send the entire entity. ideally only
// specific fields should be patched.
// Approve
export function patchInvoice(invoice) {
  return function (dispatch) {
    fetch(SERVER_URL+'/'+invoice.id, {
        method: 'PATCH',
        body: JSON.stringify(invoice.entity),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(
        function(resp) {
          dispatch(updatePatchedInvoice(invoice));
          toast.info("Invoice patched !");
        return resp.json(); 
      }, function(resp) {
          toast.error("Error patching Invoice !");
        return resp.json();
      });
    };
}

export function putInvoice(invoice) {
  return function (dispatch) {
    fetch(SERVER_URL+'/'+invoice.id, {
        method: 'put',
        body: JSON.stringify(invoice),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(
        function(resp) {
          dispatch(updateEditedInvoice(invoice));
          toast.info("Invoice Changes Uploaded !");
        return resp.json();
      }, function(resp) {
          toast.error("Error Uploading Invoice !");
        return resp.json();
      });
    };
}

export function deleteInvoice(invoice) {
  return function (dispatch) {
    fetch(SERVER_URL+'/'+invoice.id, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(
        function(resp) {
          dispatch(removeInvoice(invoice));
          toast.info("Invoice patched !");
        return resp.json(); 
      }, function(resp) {
          toast.error("Error patching Invoice !");
        return resp.json();
      });
    };
}