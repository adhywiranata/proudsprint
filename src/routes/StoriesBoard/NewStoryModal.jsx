import React from 'react';

import styles from './newStoryModal.css';

const NewStoryModal = props => (
  <div>
    <button className={styles.popupOverlay} onClick={() => props.toggleNewStoryModal(false)} />
    <div className={styles.popupWrapper}>
      <form>
        <label htmlFor="titleForm">Story</label>
        <input
          id="titleForm"
          type="text"
          value={props.storyModalData.newStoryForm.story}
          onChange={e => props.handleChangeNewStoryForm({ storyKey: 'story', storyValue: e.target.value })}
        />

        <label htmlFor="titleForm">Story Title</label>
        <input id="titleForm" type="text" />
      </form>
    </div>
  </div>
);

NewStoryModal.propTypes = {
  storyModalData: React.PropTypes.shape({
    isModalVisible: React.PropTypes.bool.isRequired,
    newStoryForm: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.image,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }).isRequired,
  }).isRequired,

  toggleNewStoryModal: React.PropTypes.func.isRequired,
  handleChangeNewStoryForm: React.PropTypes.func.isRequired,
};

export default NewStoryModal;
