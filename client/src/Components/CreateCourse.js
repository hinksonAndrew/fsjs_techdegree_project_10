import React from 'react';

const CreateCourse = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.history.push('/');
  }

  return (
    <div className="wrap">
      <h2>Create Course</h2>
      <div className="validation--errors">
        <h3>Validation Errors</h3>
        <ul>
          <li>Please provide a value for "Title"</li>
          <li>Please provide a value for "Description"</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input id="courseTitle" name="courseTitle" type="text" defaultValue="" />

            <label htmlFor="courseAuthor">Course Author</label>
            <input id="courseAuthor" name="courseAuthor" type="text" defaultValue="Joe Smith" />

            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" name="courseDescription"></textarea>
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input id="estimatedTime" name="estimatedTime" type="text" defaultValue="" />

            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
          </div>
        </div>
        <button className="button" type="submit">Create Course</button>
        <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateCourse;