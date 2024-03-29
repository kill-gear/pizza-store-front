import React, { Component } from "react";
import Payment from "./Payment";
import { Link } from "react-router-dom";

export default class Checkout extends Component {
  render() {
    return (
      <div className="total-cart">
        <div className="col s12 m6">
          <div className="card smoke-white right">
            <div className="card-content black-text">
              <span className="card-title">
                <b>Total Cart Value: </b> €{this.props.total.toFixed(2)}
              </span>
              <div className="card-action">
                {/* <div className="payment">
                  <Payment product={product} />
                </div> */}

                <Link to="/payment">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Checkout
                    <i className="material-icons right">send</i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
