import React, { Component } from "react";

const UserContext = React.createContext();
export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Nurcan",
        department: "Ceng",
        salary: "8000",
      },
      {
        id: 2,
        name: "Rabia",
        department: "Teach",
        salary: "10000",
      },
      {
        id: 3,
        name: "Ayşe",
        department: "Nurse",
        salary: "7000",
      },
    ],
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children} {/*app componentini simgeliyor*/}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer; //diğer sınıflarda kullanabikmek için export ettim
