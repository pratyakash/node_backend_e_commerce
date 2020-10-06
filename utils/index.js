const drill_down_error_message = (error) => {
	var errorMessage = error.message;

	if (error.errors && error.errors.length > 0) {
		error.errors.forEach(err => {
			if (err.message) {
				errorMessage = errorMessage + '. ' + err.message;
			}
		});
	}

	return errorMessage;
};

const generate_warning = (message, code) => {
	const error = new Error(message);
	error.warning = true;
    code ? error.code = code : '';

    return error;
};


module.exports.drill_down_error_message = drill_down_error_message;
module.exports.generate_warning = generate_warning;