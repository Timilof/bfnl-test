import React from "react";

import { Select, FilterBar } from "./styled";

const Filter = ({ venues, setCityFilter, setTypeFilter }) => {
	return (
		<FilterBar>
			{/* should include label  */}
			{/* <label for="city">Filter on city:</label> */}

			<Select onChange={e => setCityFilter(e.target.value)} id="city">
				<option value="">Filter on city</option>
				{venues.map(venueItem => (
					<option value={venueItem.city}>{venueItem.city}</option>
				))}
			</Select>

			<Select onChange={e => setTypeFilter(e.target.value)} id="city">
				<option value="">Filter on type</option>
				<option value="">Random type 1</option>
				<option value="">Random type 1</option>
				<option value="">Random type 2</option>
				<option value="">Random type 3</option>
			</Select>
		</FilterBar>
	);
};

export default Filter;
