import { Tooltip } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SidebarRoutes from "./SidebarRoutes";

const Navbar = () => {
	return (
		<Sidebar>
			<Nav>
				{SidebarRoutes.map(item => (
					<Route key={item.title}>
						<Tooltip title={item.title} aria-label={item.title} placement="right">
							<TabLink to={item.path}>
								{item.icon}
								<span className="link-text">{item.title}</span>
							</TabLink>
						</Tooltip>
					</Route>
				))}
			</Nav>
		</Sidebar>
	);
};
export default Navbar;

const Sidebar = styled.nav`
	background-color: ${props => props.theme.bg_sidebar};
	position: sticky;
	align-self: start;
	top: 0;
	height: 100vh;
	padding: 10px;

	/* transition: width 380ms ease-in-out; */

	/* &:hover {
		width: 10rem;
		.link-text {
			display: block;
		}
	} */
`;

const Nav = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Route = styled.li`
	width: 100%;
	padding-block: 6px;

	&:last-child {
		margin-top: auto;
	}
`;

const TabLink = styled(Link)`
	color: ${props => props.theme.sidebar_icon};

	border-radius: 8px;
	padding: 0.5rem;

	display: flex;
	align-items: center;
	text-decoration: none;

	transition: 350ms;
	&:hover {
		color: ${props => props.theme.white};
		background-color: ${props => props.theme.bg_sidebar_icon};
		filter: grayscale(0%) opacity(1);
	}

	.link-text {
		margin-left: 5px;
		display: none;
	}
`;
