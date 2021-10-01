import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { BinaryNumberForm } from './components/BinaryNumberForm';
import './App.css';

function App(): JSX.Element {
	return (
		<>
			<Row>
				<Col style={{ textAlign: 'center' }}>
					<BinaryNumberForm value={'0'} />
				</Col>
			</Row>
		</>
	);
}

export default App;
