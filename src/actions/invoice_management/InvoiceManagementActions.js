import { toast } from 'react-toastify';

function updateInvoiceListing(invoices) {
  return {
    type: 'INVOICE_LISTING',
    invoices
  }
}

export function fetchInvoiceList(data) {
  return function (dispatch) {
    fetch('http://localhost:3001/invoices')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
          dispatch(updateInvoiceListing(data));
      });
    };
}

export function postInvoice(data) {
	return function (dispatch) {
		fetch('http://localhost:3001/invoices', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
    	.then(
        function(resp) {
          //dispatch(updatePaymentActionCreator(data));
          toast.info("Invoice Uploaded !");
        return resp.json(); 
      }, function(resp) {
          toast.error("Error Uploading Invoice !");
        return resp.json();
      });
    };
}