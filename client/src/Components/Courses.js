import React, {useState, useEffect} from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  /**
   * Sends a request to the api to get all courses in database and sets 
   * state of courses to what came back.
   */
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(error => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div className="wrap main--grid">
      {courses.map(course => (
        <a key={course.id} className="course--module course--link" href={`/courses/${course.id}`}>
          <h2 className="course--label">Course</h2>
          <h3 className="course--title">{course.title}</h3>
        </a>
      ))}
      <a className="course--module course--add--module" href="/create">
        <span className="course--add--title">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
            New Course
        </span>
      </a>
    </div>    
  );
}

export default Courses;