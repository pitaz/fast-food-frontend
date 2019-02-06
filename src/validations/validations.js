import Validator from 'validatorjs';

const validateSignUpInput = (input) => {
	const { name, email, password, password_confirmation } = input;
	
	const data = {
		name,
		email,
		password,
		password_confirmation
	};

	const rules = {
		name: 'required|alpha_dash|min:2|max:20',
		email: 'required|email',
		password: 'required|min:6|confirmed',
		password_confirmation: 'required'
	};

	const validation = new Validator(data, rules);

    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();

    return {
      isValid,
      errors
    };
};

const validateSignInInput = (input) => {
	const { email, password } = input;
	
	const data = {
		email,
		password,
	};

	const rules = {
		email: 'required|email',
		password: 'required',
	};

	const validation = new Validator(data, rules);

    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();

    return {
      isValid,
      errors
    };
};

export { validateSignUpInput, validateSignInInput};
