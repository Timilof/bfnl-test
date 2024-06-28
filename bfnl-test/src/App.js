import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Venues from "./pages/Venues";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Venues />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
