import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar bg-dark">
					<div className="container-fluid">
						<p className="navbar-brand d-flex align-items-center justify-content-center m-0" href="#">
						<i className="fa-brands fa-github text-light display-5"></i>
						<h2 className="text-light ps-2 m-0">GitHub</h2>
						</p>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
