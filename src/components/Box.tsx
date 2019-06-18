import * as React from 'react';

interface Props {
	//props
}

export const Box: React.FC<Props> = (props) => {
	const [ favNr, setFavNr ] = React.useState(449);
	return (
		<div className="insideBox">
			<h1>My fav number is {favNr}</h1>
			<p>Change number</p>
			<div className="buttonsArea">
				<button onClick={() => setFavNr(222)}>222</button>
				<button onClick={() => setFavNr(333)}>333</button>
				<button onClick={() => setFavNr(453)}>453</button>
				<button onClick={() => setFavNr(564)}>564</button>
				<button onClick={() => setFavNr(Number(Math.floor(Math.random() * 926)))}>Random</button>
			</div>
		</div>
	);
};
