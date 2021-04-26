import React, { useEffect, useState } from 'react';
import Form from './Form';

function UpdateCourse(props) {

  const [course, setCourse] = useState([]);
  const [errors, setErrors] = useState([]);
 
  const id = props.match.params.id;
  const authUser = props.context.authenticatedUser;

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
    props.history.push('/');
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

  function change(e) {
    const { name, value } = e.target;

    setCourse(prevState => ({ ...prevState, [name]: value }));
  }
  
  return (
    <div className="wrap">
      <h2>Update Course</h2>
      <div className="main--flex">
        <Form
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText="Update Course"
          elements={() => (
            <React.Fragment>
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
                <input
                  id="description"
                  name="description"
                  type="textarea"
                  value={course.description || ''}
                  onChange={change} />
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
                <input
                  id="materialsNeeded"
                  name="materialsNeeded"
                  type="textarea"
                  value={course.materialsNeeded || ''}
                  onChange={change} />
              </div>
            </React.Fragment>
          )} />
        </div>
      </div>
  );
};

export default UpdateCourse;