import React, { Component } from 'react';
import Form from './Form';

/**
 * Sets internal state for component and with the use of the Form.js component
 * renders the form. Uses state to get userId of authenticated user.
 */
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
        
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Create Course"
            elements={() => (
              <React.Fragment>
              <div className="main--flex">
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
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={this.change}></textarea>
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
                  <textarea
                    id="materialsNeeded"
                    name="materialsNeeded"
                    value={materialsNeeded}
                    onChange={this.change}></textarea>
                </div>
                </div>
              </React.Fragment>
            )} />
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