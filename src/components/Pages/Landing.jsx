import React, { Component } from "react";
import barbecue from '../../../public/images/barbecue-blur-chicken-209406.jpg';
import bike from '../../../public/images/action-adult-bike-417005.jpg';
import chickenDish from '../../../public/images/chicken-fried-rice-28524-1.jpg';
import bankingcomputer from '../../../public/images/banking-buy-computer-34577.jpg';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="jumbo-section">
          <div className="jb-content-wrapper">
            <img
              src={barbecue}
              alt="jumbo image"
            />
            <p className="text">Welcome to Fast Food Fast</p>
          </div>
        </div>

        <div className="grid-wrapper welcome-cnt">
          <div className="welcome-msg msg">
            <p id="header">Fast Food Fast Restaurant</p>
            <p id="sub-header">Welcome</p>
            <p id="msg-body">
              Nigeria's number one online/offline Restaurant. We provide a wide
              range of mouth-watering dishes as well as snacks.
            </p>
          </div>
        </div>
        <div className="parallax content-01" />

        <div className="grid-wrapper">
          <div className="order-details">
            <img src={bike} />
            <h3 className="menu-services-txt">We make fast deliveries</h3>
            <p className="menu-services-txt">
              With over 50 branches nationwide we provide fast door-to-door
              delivery services. Place an order now and watch it delivered in 60
              minutes.
            </p>
            <button>Read more</button>
          </div>

          <div className="order-details">
            <img src={bankingcomputer} />
            <h3 className="menu-services-txt">
              Safe and secured online payments
            </h3>
            <p className="menu-services-txt">
              In a bid to make sure you satisfied and secured when making online
              payments we put in place a secured payment processing platform to
              ensure your safety.
            </p>
            <button>Read more</button>
          </div>

          <div className="order-details">
            <img src={chickenDish} />
            <h3 className="menu-services-txt">Mouth watering dishes</h3>
            <p className="menu-services-txt">
              We provide wide range of mouth-watering dishes
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
