import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage, TaskDetail } from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					Component={LandingPage}
				/>
				<Route
					path="/tasks/:id"
					Component={TaskDetail}
				/>
			</Routes>
		</Router>
	);
}

export default App;
