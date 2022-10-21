import axios from "axios";
import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";

class App extends Component {
  constructor() {
    super()
    this.state={
      users: []
    }
  }

  seachUser = (keyword) => {
		axios
			.get(`https://api.github.com/search/users?q=${keyword}`)
			.then((res) => {
        this.setState({users: res.data.items })
      })
			.catch((err) => console.log(err));
	};

  
  
  render() {
    return (
      <div>
        <Header url="https://github.com" title="GitHub"/>
        <div className="container">
        <Search searchValue={this.seachUser}/>
        <UserList uservalue={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
