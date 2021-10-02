import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';


export function BinaryNumberForm(props: { value: string }): JSX.Element {
	const [displayValue, setDisplayValue] = useState<string>(props.value);
	const [convertedValue, setConvertedValue] = useState<string>('');
	const BinaryNumberFormOnChange = (event: React.FormEvent<HTMLElement>): void => {
		const changedElement: HTMLInputElement = event.target as HTMLInputElement;
		const input: string = changedElement.value;
		if (!input.split('').every(e => (e === '0' || e === '1'))) {
			let tmpInput: string = input;
			tmpInput = tmpInput.substring(0, tmpInput.length - 1);
			setDisplayValue(tmpInput);
		} else {
			setDisplayValue(input);
		}
	};

	const conversionClick = () => {
		const binaryNumber: string = displayValue;
		setConvertedValue(String(parseInt(binaryNumber, 2)));
	};


	return (
		<>

			<Form>

				<Form.Group className="mb-3" controlId="basicNumberContainer">

					<Form.Label>Enter binary number in to be converted to decimal</Form.Label>
					<Form.Control type="text" value={ displayValue } style={{ textAlign: 'center' }} onChange={ BinaryNumberFormOnChange } ></Form.Control>

				</Form.Group>
				<Button variant="primary" onClick={ conversionClick }>Convert to Decimal</Button>

			</Form>
			<br />
			<br />
			<Form>

				<Form.Group className="converted result" controlId="basicResultContainer">

					<Form.Label>Converted number</Form.Label>
					<Form.Control type="text" value={ convertedValue } style={{ textAlign: 'center' }} readOnly ></Form.Control>

				</Form.Group>

			</Form>

		</>
	);
}
