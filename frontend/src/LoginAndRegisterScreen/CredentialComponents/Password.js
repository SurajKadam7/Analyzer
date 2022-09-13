import React from 'react';

const Password = ({ placeholder }) => {
	return (
		<div class='password-container abc'>
			<input placeholder={placeholder} class='input-tag' />
			{/* <!-- <span class="bold">hide</span> --> */}
		</div>
	);
};

export default Password;
