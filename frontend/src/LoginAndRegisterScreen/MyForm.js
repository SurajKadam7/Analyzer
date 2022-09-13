import { useState } from 'react';

function MyForm() {
	const [name, setName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Enter your name:
				<input
					type='text'
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<input type='submit' />
		</form>
	);
}

export default MyForm;
