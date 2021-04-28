import React, { useEffect, useState } from 'react';
import Form from './Form';

/**
 * Gets values already present and allows user to update a course if they
 * are the author of the course.
 * @param {props} props 
 * @returns 
 */
function UpdateCourse(props) {

  const [course, setCourse] = useState([]);
  const [errors, setErrors] = useState([]);
 
  const id = props.match.params.id;
  const authUser = props.context.authenticatedUser;

  /**
   * Requests specific course info from API. If user that requested is not 
   * the author then /forbidden path is pushed.
   */
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then((data) => {
        setCourse(data);
        if (data.User.id !== authUser.id) {
          props.history.push('/forbidden');
        }
      })
      .catch(error => console.log('Error fetching and parsing data', error));
  }, [id, authUser, props]);

  function cancel(e) {
    props.history.push(`/courses/${id}`);
  }

  function submit(e) {
    
    props.context.data.updateCourse(id, course, authUser.email, authUser.password)
      .then(errors => {
        if (errors.length) {
          setErrors(errors);
        } else {
          props.history.push(`/courses/${id}`);
        }
      })
      .catch( err => {
        console.log(err);
        props.history.push('/error');
      })
  }

  /**
   * Updates the state based on the name of the field.
   * @param {event} e 
   */
  function change(e) {
    const { name, value } = e.target;

    setCourse(prevState => ({ ...prevState, [name]: value }));
  }
  
  return (
    <div className="wrap">
      <h2>Update Course</h2>
      
        <Form
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText="Update Course"
          elements={() => (
            <React.Fragment>
            <div className="main--flex">
              <div>
                <label htmlFor="title">Course Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={course.title || ''}
                  onChange={change} />
                <label htmlFor="courseAuthor">Course Author</label>
                <input
                  id="courseAuthor"
                  name="courseAuthor"
                  type="text"
                  value={`${authUser.firstName} ${authUser.lastName}`}
                  onChange={change} />
                <label htmlFor="description">Course Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={course.description || ''}
                  onChange={change}></textarea>
              </div>
              <div>
                <label htmlFor="estimatedTime">Estimated Time</label>
                <input
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  value={course.estimatedTime || ''}
                  onChange={change} />
                <label htmlFor="materialsNeeded">Materials Needed</label>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  value={course.materialsNeeded || ''}
                  onChange={change}></textarea>
              </div>
              </div>
            </React.Fragment>
          )} />
        </div>
  );
};

export default UpdateCourse;