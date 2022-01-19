import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER } from '../utils/mutations';

const PinCode = () => {
	// set if our pin code is valid
	const [isPinCodeValid, setIsPinCodeValid] = useState(false);
	// the last pin code entered after button press
	const [pinCode, setPinCode] = useState('');
	// was the button pressed?
	const [btnIsPressed, setBtnIsPressed] = useState(false);
	// grab out data
	// const [loginUser] = useMutation(LOGIN_USER);

	const [correctPin] = useState('1001');

	const checkPinCode = async () => {
		// try {
		// 	const { data } = await loginUser({
		// 		variables: { pin: pinCode },
		// 	});

		// 	Auth.login(data.login.token);
		// } catch (e) {
		// 	console.error(e);
		// }

		const isPinCodeValid = pinCode === correctPin;

		setBtnIsPressed(true);
		setIsPinCodeValid(isPinCodeValid);
		if (!isPinCodeValid) {
			setPinCode('');
		} else window.location.href = '/home';
	};

	const handlePinChange = (pinCode) => {
		setPinCode(pinCode);
		setBtnIsPressed(false);
	};

	return (
		<div className='pin-wrapper'>
			<div>Enter PIN to continue</div>
			<ReactCodeInput
				id='pinCode'
				type='password'
				isValid={isPinCodeValid}
				fields={4}
				onChange={handlePinChange}
				value={pinCode}
			/>
			<div>{isPinCodeValid && btnIsPressed && 'Valid'}</div>
			<div>
				{!isPinCodeValid && btnIsPressed && 'Entry is not a valid pin'}
			</div>
			<button onClick={checkPinCode}>Check pin</button>
		</div>
	);
};

export default PinCode;
