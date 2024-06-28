import styled, { css } from "styled-components";

export const ListItem = styled.li`
	list-style: none;

	p {
		margin: 6px 0;
	}

	span {
		color: #999999;
		font-size: 14px;
	}

	img {
		width: 305px;
		border-radius: 5px;
		object-fit: cover;
		height: 155px;
		margin: 16px 0 0 0;
	}
`;

export const CardContainer = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	max-width: 30vw;
	font-weight: 500;
	padding: 0;
	margin: 0 0 0 30px;
`;

export const VenueLink = styled.a`
	display: block;
	background: #059bc5;
	padding: 8px;
	text-decoration: none;
	color: #fff;
	font-weight: 500;
	width: fit-content;
	margin: 14px 0 0 0;
`;

export const CardToggle = styled.div`
	background-color: #d9d9d9;
	border-radius: 5px;
	width: fit-content;
	margin: 16px 0 16px 30px;

	button {
		${({ isActive }) =>
			isActive &&
			css`
				background: white;
			`}
		background: none;
		border: none;
	}
`;
