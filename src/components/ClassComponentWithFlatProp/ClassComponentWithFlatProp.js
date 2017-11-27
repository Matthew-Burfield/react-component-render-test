
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassComponentWithFlatPropParent extends Component {
  componentDidMount() {

  }

  render() {
    const { id, name } = this.props;
    return (
      <div>
        <h2>Class component with flat props parent</h2>
        <p>{'>>>'}{ id }{ name }{'<<<'}</p>
      </div>
    );
  }
}

ClassComponentWithFlatPropParent.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

ClassComponentWithFlatPropParent.defaultProps = {
  id: 0,
  name: '',
};

const mapStateToProps = state => ({
  id: state.getIn(['constantState', 'constantState', 'id']),
  name: state.getIn(['constantState', 'constantState', 'name']),
});

export default connect(mapStateToProps)(ClassComponentWithFlatPropParent);
