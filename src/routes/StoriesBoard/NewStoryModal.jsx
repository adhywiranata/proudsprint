import React from 'react';

import styles from './newStoryModal.css';

const NewStoryModal = props => (
  <div>
    <button className={styles.popupOverlay} onClick={() => props.toggleNewStoryModal()} />
    <div className={styles.popupWrapper}>
      <form>
        <label htmlFor="titleForm">Story Title</label>
        <input id="titleForm" type="text" />

        <label htmlFor="titleForm">Story Title</label>
        <input id="titleForm" type="text" />
      </form>
    </div>
  </div>
);

NewStoryModal.propTypes = {
  toggleNewStoryModal: React.PropTypes.func.isRequired,
};

export default NewStoryModal;
