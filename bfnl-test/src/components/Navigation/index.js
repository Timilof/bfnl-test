import React from "react";

import Logo from "../../assets/logo_bfnl.png";
import { ListItem, List, Wrapper } from "./styled";

const Navigation = () => {
	return (
		<Wrapper>
			<img src={Logo} alt="Bedrijfs fitness Nederland" />
			<List>
				<ListItem>Sport venues</ListItem>
				<ListItem>About-us</ListItem>
				<ListItem>Sign up</ListItem>
			</List>
		</Wrapper>
	);
};

export default Navigation;
