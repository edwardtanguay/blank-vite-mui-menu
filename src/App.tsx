import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageInfo } from './pages/PageInfo';
import { PageAbout } from './pages/PageAbout';
import { AppBar } from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<AppBar className="appBar">
				<Toolbar>
					<Typography variant="h6" color="inherit" component="div">
						<nav>
							<span className="navHeader">Website</span>
							<NavLink to="/welcome">Welcome</NavLink>
							<NavLink to="/info">Info</NavLink>
							<NavLink to="/about">About</NavLink>
						</nav>
					</Typography>
				</Toolbar>
			</AppBar>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/info" element={<PageInfo />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
