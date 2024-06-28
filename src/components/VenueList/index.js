import React, { useState } from "react";

import { ListItem, CardContainer, VenueLink, CardToggle } from "./styled";

const VenueList = ({ venues }) => {
	const [isCard, setIsCard] = useState(true);

	return (
		<>
			<CardToggle isActive={isCard === true}>
				<button isActive={isCard === true} onClick={() => setIsCard(true)}>
					card
				</button>
				<button isActive={isCard === false} onClick={() => setIsCard(false)}>
					list
				</button>
			</CardToggle>
			<CardContainer>
				{venues.map(venueItem => (
					<ListItem>
						{isCard && (
							<img
								src={venueItem.image}
								alt={`cover image for ${venueItem.image}`}
							/>
						)}
						<p>{venueItem.companyName}</p>
						<span>
							{venueItem.street}, {venueItem.city}
						</span>
						<VenueLink href="#">View location</VenueLink>
					</ListItem>
				))}
			</CardContainer>
		</>
	);
};

export default VenueList;
