import React, { Component } from "react";

export default class School extends Component {
  render() {
    const { okuladi } = this.props;
    return (
      <div>
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="d-inline" >
                {okuladi}{" "}
              </h4>
              <i
                className="fa fa-shopping-cart"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
              <div className="card-body">
                <p className="card-text">Okuladi: {okuladi}</p>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}
