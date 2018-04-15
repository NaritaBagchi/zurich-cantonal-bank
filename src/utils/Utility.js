export function formatDate(date) {
	var monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
		];

	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	return monthNames[monthIndex] + ' ' + day + ', '+ year;
};

export function compareActiveFormState(newFormData, prevFormData) {
	return ((newFormData.iNumber == prevFormData.iNumber)
		&& (newFormData.amount == prevFormData.amount)
			&& (newFormData.customerNumber == prevFormData.customerNumber)
				&& (newFormData.customerCounty == prevFormData.customerCounty)
					&& (newFormData.iLineItems == prevFormData.iLineItems)
						&& (newFormData.invoiceCopy == prevFormData.invoiceCopy)
							&& (newFormData.status == prevFormData.status));
};