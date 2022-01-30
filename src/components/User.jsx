import React, { Component } from "react";
import PropTypes from "prop-types";

export default class User extends Component {
  state = {
    isVisible: false,
  };

  // constructor (props) //constructor ile kullanımı
  // {
  //   super(props);

  //   this.state=
  //   {
  //     isVisible : false
  //   }
  // }

  // constructor(props) //kendi yazdığımız metodu bind ettik
  // {
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }

  //bind etmenin diğer yolu
  onClickEvent = (e) => {
    //bunu yazınca bind etmeye gerek kalmıyr
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent}>
              {name}
            </h4>
            <i
              className="fa fa-shopping-cart"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maaş: {salary}</p>
              <p className="card-text">Department: {department}</p>
            </div>
          ) : (
            "isVisible false mlsf"
          )}
        </div>
      
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};

User.defaultProps = {
  name: "İsim girilmedi",
  department: "Bölüm girilmesi",
  salary: "Maaş girilmedi",
};
