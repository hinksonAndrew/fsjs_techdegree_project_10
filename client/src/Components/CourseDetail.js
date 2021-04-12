import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

const CourseDetail = ({match}) => {
  const [course, setCourse] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const id = match.params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then((data) => {
        setCourse(data);
        setFirstName(data.User.firstName);
        setLastName(data.User.lastName);
      })
      .catch(error => console.log('Error fetching and parsing data', error));
  }, [id]);

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          <a className="button" href="/updateCourse">Update Course</a>
          <a className="button" href="/deleteCourse">Delete Course</a>
          <a className="button button-secondary" href="/">Return to List</a>
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