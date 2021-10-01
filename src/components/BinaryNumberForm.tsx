import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { MouseEvent } from 'react';

export function BinaryNumberForm(props: { value: string }): JSX.Element {
	const BinaryNumberFormOnChange = (event: MouseEvent): void => {
		const changedElement: HTMLInputElement = event.target as HTMLInputElement;
		const input: string = changedElement.value;
		if (!input.split('').every(e => (e === '0' || e === '1'))) {
			let tmpInput: string = input;
			tmpInput = tmpInput.substring(0, tmpInput.length - 1);
			props.value = tmpInput;
		} else {
			props.value = input;
		}
	};


	return (
		<>

			<Form>

				<Form.Group className="mb-3" controlId="basicNumberContainer">

					<Form.Label>Enter binary number in to be converted to decimal</Form.Label>
					<Form.Control type="text" value={ props.value } style={{ textAlign: 'center' }} onChange={ BinaryNumberFormOnChange } ></Form.Control>

				</Form.Group>

			</Form>

		</>
	);
}

export default BinaryNumberForm;
