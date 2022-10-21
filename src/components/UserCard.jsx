import React, { Component } from "react";

class UserCard extends Component {
	render() {
		const {login,avatar_url,html_url,id} = this.props.comingdata;
		return (
			<div className="col-12 col-sm-6 col-lg-3">
				<div className="card" >
					<img src={avatar_url} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{login}</h5>
						<p className="card-text"><span className="fw-bold">ID:</span> {id}</p>
						<a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark">
							Go to Profile
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCard;
