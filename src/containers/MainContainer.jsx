import React from 'react';
import { connect } from 'react-redux';

import { toggleNewStoryModal } from '../actions';

import Header from '../components/layouts/Header';

const MainContainer = props => (
  <div>
    <Header toggleNewStoryModal={props.toggleNewStoryModal} />
    { props.children }
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  toggleNewStoryModal: isModalVisible => dispatch(toggleNewStoryModal(isModalVisible)),
});

MainContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
  toggleNewStoryModal: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
