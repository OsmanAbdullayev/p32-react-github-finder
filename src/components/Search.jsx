import React, { Component } from "react";

class Search extends Component {
	render() {
		return (
			<div className="input-group my-3">
				<input type="text" className="form-control" placeholder="Who are you looking for?" aria-label="Who are you looking for?" aria-describedby="button-addon2" />
				<button className="btn btn-dark" type="button" id="button-addon2">
					Search
				</button>
			</div>
		);
	}
}

export default Search;
