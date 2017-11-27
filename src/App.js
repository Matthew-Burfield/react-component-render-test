
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Perf from 'react-addons-perf';
import { connect } from 'react-redux';
import { increaseCounter } from './redux/actionCreators';

import ClassComponentWithFlatProp from './components/ClassComponentWithFlatProp/ClassComponentWithFlatProp';
import ClassComponentWithObjectProp from './components/ClassComponentWithObjectProp/ClassComponentWithObjectProp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidUpdate() {
    Perf.stop();
    Perf.printIncludive();
    Perf.printWasted();
  }

  handleButtonClick() {
    Perf.start();
    this.props.increaseCount();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Increase Counter</button>
        <ClassComponentWithFlatProp />
        <ClassComponentWithObjectProp />
      </div>
    );
  }
}

App.propTypes = {
  increaseCount: PropTypes.func,
};

App.defaultProps = {
  increaseCount: () => {},
};

const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(increaseCounter()),
});

export default connect(null, mapDispatchToProps)(App);
