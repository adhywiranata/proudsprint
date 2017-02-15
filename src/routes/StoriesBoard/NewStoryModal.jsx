import React from 'react';

import styles from './newStoryModal.css';

const NewStoryModal = props => (
  <div>
    <button className={styles.popupOverlay} onClick={() => props.toggleNewStoryModal(false)} />
    <div className={styles.popupWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addStory(props.storyModalData.newStoryForm);
          props.toggleNewStoryModal(false);
          props.incrementNewStoryFormId();
        }
      }
      >
        <label htmlFor="storyForm">Story</label>
        <input
          id="storyForm"
          type="text"
          value={props.storyModalData.newStoryForm.story}
          onChange={e => props.handleChangeNewStoryForm({ storyKey: 'story', storyValue: e.target.value })}
        />

        <label htmlFor="categoryForm">
          Category: {props.storyModalData.newStoryForm.category}
        </label>
        <select
          id="titleForm"
          value={props.storyModalData.newStoryForm.category}
          onChange={e =>
            props.handleChangeNewStoryForm({
              storyKey: 'category',
              storyValue: e.target.value,
            })
          }
        >
          <option value="icebox">Icebox</option>
          <option value="backlog">Backlog</option>
        </select>

        <label htmlFor="userForm">
          Requester: {props.storyModalData.newStoryForm.user}
        </label>
        <select id="userForm" onChange={e => props.handleChangeNewStoryForm({ storyKey: 'user', storyValue: e.target.value })}>
          <option value="Budi">Budi</option>
          <option value="Mike">Mike</option>
          <option value="John">John</option>
          <option value="Jose">Jose</option>
          <option value="Mark">Mark</option>
        </select>

        <button className={styles.submitBtn}>Add</button>
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
  addStory: React.PropTypes.func.isRequired,
  incrementNewStoryFormId: React.PropTypes.func.isRequired,
};

export default NewStoryModal;
