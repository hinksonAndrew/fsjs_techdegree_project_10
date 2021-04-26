import React, { Component } from 'react';
import Form from './Form';

export default class CreateCourse extends Component {
  state = {
    title: '',
    courseAuthor: `${this.props.context.authenticatedUser.firstName} ${this.props.context.authenticatedUser.lastName}`,
    userId: this.props.context.authenticatedUser.id,
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  }
  render() {
    const {
      title,
      courseAuthor,
      description,
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
                  <label htmlFor="title">Course Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={this.change} />
                  <label htmlFor="courseAuthor">Course Author</label>
                  <input
                    id="courseAuthor"
                    name="courseAuthor"
                    type="text"
                    value={courseAuthor}
                    onChange={this.change} />
                  <label htmlFor="description">Course Description</label>
                  <input
                    id="description"
                    name="description"
                    type="textarea"
                    value={description}
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
    const authUser = this.props.context.authenticatedUser;

    const {
      title,
      courseAuthor,
      userId,
      description,
      estimatedTime,
      materialsNeeded
    } = this.state;

    const course = {
      title,
      courseAuthor,
      userId,
      description,
      estimatedTime,
      materialsNeeded
    };

    context.data.createCourse(course, authUser.email, authUser.password)
      .then (errors => {
        if (errors.length) {
          console.log("error: ", errors);
          this.setState( {errors} );
        } else {
          this.props.history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      })
  }

  cancel = () => {
    this.props.history.push('/');
  }
};