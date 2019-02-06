/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import fetchMeal from '../../actions/menu';
// import fetchSingleMenu from '../../actions/getSingleMenu';
// import placeOrder from '../../actions/placeOrder';

class Menu extends Component {
  componentDidMount = () => {
    const { action } = this.props;
    action.fetchMeals();
  };
  render() {
    const { menu } = this.props;
    return (
      <div>
        <p className="menu-text">Menu</p>
        <div className="grid-wrapper">
        { menu.map(meal => (
            (
            <div className="order-details" key={meal.id}>
              <img src={`../src/${meal.image}`} key={meal.image}/>
              <h3>{meal.price}</h3>
              <p>{meal.name}</p>
              <Link to={`/menu/${meal.id}`} className='bt'>Place order</Link>
            </div>
            )
          )
        )}   
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.instanceOf(Array),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  menu: state.menuReducer.menu
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      fetchMeals: fetchMeal,
      // placeOrder,
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(Menu);
