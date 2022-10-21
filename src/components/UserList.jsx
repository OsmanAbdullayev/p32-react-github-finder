import React, { Component } from "react";
import UserCard from "./UserCard";

class UserList extends Component {
	render() {
		return <div className="row g-2">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>;
	}
}

export default UserList;
