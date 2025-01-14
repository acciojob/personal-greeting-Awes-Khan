import React from "react";

const Greeting = (props) => {
	const [name, setName] = React.useState("");

	return (
		<div>
			<label htmlFor="name"> Enter your name:</label>
			<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
			<h1>Hello {name}!</h1>
		</div>
	);
}

export default Greeting