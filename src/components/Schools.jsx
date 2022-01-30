import React, { Component } from "react";
import School from "./School";

export default class Schools extends Component {
  render() {
      const{schools} = this.props;
    return (
      <div>
          
        {schools.map((school) => {
          return (
            <School
              key={school.id}
              okuladi={school.okuladi}
            />
          );
        })}
      </div>
    );
  }
}
