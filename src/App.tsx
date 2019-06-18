import React from 'react';
import './App.scss';
import { Box } from './components/Box';
import { AppHeader } from './components/AppHeader';

const App: React.FC = () => {
	return (
		<div className="App">
			<AppHeader />
			<Box />
		</div>
	);
};

export default App;
