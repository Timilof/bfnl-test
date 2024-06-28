import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import Filter from "../components/Filter";
import VenueList from "../components/VenueList";
import Map from "../components/Map";

const Venues = () => {
	const [venues, setVenues] = useState([]);

	const [typeFilter, setTypeFilter] = useState();
	const [cityFilter, setCityFilter] = useState("");
	const [filteredVenues, setFilteredVenues] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVenues = async () => {
			try {
				const response = await fetch(
					"https://6666bf60a2f8516ff7a4b553.mockapi.io/api/v1/sportvenues"
				);
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				const data = await response.json();
				setVenues(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchVenues();
	}, []);

	useEffect(() => {
		const locationResults = venues.filter(venue =>
			venue.city.toLowerCase().includes(cityFilter.toLowerCase())
		);
		// const typeResults = locationResults.filter(venue =>
		// 	venue.city.toLowerCase().includes(cityFilter.toLowerCase())
		// );

		setFilteredVenues(locationResults);
	}, [cityFilter, venues]);

	console.log(venues);

	return (
		<div>
			<Navigation />
			<Filter
				venues={venues}
				setCityFilter={setCityFilter}
				setTypeFilter={setTypeFilter}
			/>
			<VenueList venues={filteredVenues} />
			{/* <Map /> */}
		</div>
	);
};

export default Venues;
