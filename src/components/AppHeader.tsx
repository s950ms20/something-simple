import * as React from 'react';

interface Props {
	//props
}

export const AppHeader: React.FC<Props> = (props) => {
	return (
		<div className="insideBox">
			<h1>some title for new page.</h1>
			<p className="secondaryText">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio, sapiente cum quasi at totam
				accusamus, rerum tenetur aliquid quia error eveniet dignissimos sint voluptate illo voluptates saepe
				consectetur accusantium!!
			</p>
		</div>
	);
};
