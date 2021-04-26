import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

function CourseDetail(props) {
  const [course, setCourse] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let [authorized, setAuthorized] = useState(false);
  
  const id = props.match.params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then((data) => {
        setCourse(data);
        setFirstName(data.User.firstName);
        setLastName(data.User.lastName);
        if (props.context.authenticatedUser) {
          if (course.userId === props.context.authenticatedUser.id) {
            setAuthorized(true);
          }
        }
      })
      .catch(error => console.log('Error fetching and parsing data', error));
  }, [id, course.userId, props]);

  function handleDeleteCourse(e) {
    props.context.data.deleteCourse(id, props.context.authenticatedUser.email, props.context.authenticatedUser.password)
      .then(() => {
        props.history.push('/');
      });
  }
  
  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          {authorized ?
          <div>
            <a className="button" href={`${id}/update`}>Update Course</a>
            <button className="button" onClick={handleDeleteCourse}>Delete Course</button>
            <a className="button button-secondary" href="/">Return to List</a>
          </div>
          :
            <a className="button button-secondary" href="/">Return to List</a>
          }
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{course.title}</h4>
              <p>By {firstName} {lastName}</p>
              <ReactMarkdown>{course.description}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{course.estimatedTime}</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ReactMarkdown className="course--detail--list">
                {course.materialsNeeded}
              </ReactMarkdown>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CourseDetail;