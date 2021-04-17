import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class CreateCourse extends Component {
  state = {
    courseTitle: '',
    courseAuthor: '',
    courseDescription: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: []
  }
  render() {
    const {
      courseTitle,
      courseAuthor,
      courseDescription,
      estimatedTime,
      materialsNeeded,
      errors
    } = this.state;
  
    return (
      <div className="wrap">
        <h2>Create Course</h2>
        <div className="main--flex">
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Create Course"
            elements={() => (
              <React.Fragment>
                <div>
                  <label htmlFor="courseTitle">Course Title</label>
                  <input
                    id="courseTitle"
                    name="courseTitle"
                    type="text"
                    value={courseTitle}
                    onChange={this.change} />
                  <label htmlFor="courseAuthor">Course Author</label>
                  <input
                    id="courseAuthor"
                    name="courseAuthor"
                    type="text"
                    value={courseAuthor}
                    onChange={this.change} />
                  <label htmlFor="courseDescription">Course Description</label>
                  <input
                    id="courseDescription"
                    name="courseDescription"
                    type="textarea"
                    value={courseDescription}
                    onChange={this.change} />
                </div>
                <div>
                  <label htmlFor="estimatedTime">Estimated Time</label>
                  <input
                    id="estimatedTime"
                    name="estimatedTime"
                    type="text"
                    value={estimatedTime}
                    onChange={this.change} />
                  <label htmlFor="materialsNeeded">Materials Needed</label>
                  <input
                    id="materialsNeeded"
                    name="materialsNeeded"
                    type="textarea"
                    value={materialsNeeded}
                    onChange={this.change} />
                </div>
              </React.Fragment>
            )} />
          </div>
        </div>
    );
  };

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    const { context } = this.props;

    const {
      courseTitle,
      courseAuthor,
      courseDescription,
      estimatedTime,
      materialsNeeded
    } = this.state;

    const course = {
      courseTitle,
      courseAuthor,
      courseDescription,
      estimatedTime,
      materialsNeeded
    };

    context.data.createCourse(course)
      .then (errors => {
        if (errors.length) {
          this.setState({ errors });
        } // need to finish this
      })
  }
};