import { toast } from 'react-toastify';

export function createAccount(data) {
	return function (dispatch) {
		fetch('http://localhost:3001/accounts', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
    })
    .then(
        function(resp) {
          const locationHeader = resp.headers.get('location');
          const accountId = locationHeader.substring(
                              locationHeader.lastIndexOf('/')+1, locationHeader.length);
          toast.info("Thanks for banking with us! Your account number is "+accountId);
        return resp.json(); 
      }, function(resp) {
          toast.error("Something went wrong! Please contact our local branch at 9980435889");
        return resp.json();
      });
    };
}