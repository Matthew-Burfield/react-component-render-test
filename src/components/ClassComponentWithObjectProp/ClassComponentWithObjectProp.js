
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassComponentWithObjectPropParent extends Component {
  componentDidMount() {

  }

  render() {
    const { constantState } = this.props;
    return (
      // <div>
      //   <h2>Class component with object parent</h2>
      //   <p>{ constantState.get('id') }{ constantState.get('name') }</p>
      //   { constantState.get('arr').map((item, index) => <div key={index}>{item.get('id')}</div>)}
      // </div>
      <div>
        <h2>Class component with object parent</h2>
        <p>{ constantState.id }{ constantState.name }</p>
        { constantState.arr.map((item, index) => <div key={index}>{item.id}</div>)}
      </div>
    );
  }
}

ClassComponentWithObjectPropParent.propTypes = {
  constantState: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    arr: PropTypes.array,
  }),
};

ClassComponentWithObjectPropParent.defaultProps = {
  constantState: {
    id: 0,
    name: '',
    arr: [],
  },
};

const mapStateToProps = state => ({
  constantState: state.getIn(['constantState', 'constantState']).toJS(),
  counter: state.getIn(['counter', 'counterObj', 'unchangingText']),
});

export default connect(mapStateToProps)(ClassComponentWithObjectPropParent);
