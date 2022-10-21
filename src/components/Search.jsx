import axios from "axios";
import React, { Component } from "react";


class Search extends Component {
	constructor() {
		super();
		this.state = {
			keyword: "",
		};
	}
	handleChange = (e) => {
		this.setState({
			keyword: e.target.value,
		});
	};
	
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.searchValue(this.state.keyword)
	};

	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-group my-3">
					<input onChange={this.handleChange} type="text" className="form-control" placeholder="Who are you looking for?" aria-label="Who are you looking for?" aria-describedby="button-addon2" />
					<button className="btn btn-dark" type="submit" id="button-addon2">
						Search
					</button>
				</div>
			</form>
		);
	}
}

export default Search;
