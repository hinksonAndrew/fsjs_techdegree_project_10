import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class CreateCourse extends Component {
  state = {
    courseTitle: '',
    courseAuthor: '',
    courseDescription: '',
    estimatedTime: '',
    materialsNeeded: ''
  }
  render() {
    const {
      courseTitle,
      courseAuthor,
      courseDescription,
      estimatedTime,
      materialsNeeded
    } = this.state;
  
    return (
      <div className="wrap">
        <h2>Create Course</h2>
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
};