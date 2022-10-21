import React, { Component } from "react";

class UserCard extends Component {
	render() {
		return (
			<div className="col-3">
				<div className="card" >
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-dark">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCard;
