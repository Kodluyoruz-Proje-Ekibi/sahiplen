import React from 'react';

function DetailDescription({ title, description }) {
	return (
		<>
			<h6>{title}</h6>
			<p>
				İlan Detayı
				<br />
				<br />
				{description}
			</p>
		</>
	);
}

export default DetailDescription;
