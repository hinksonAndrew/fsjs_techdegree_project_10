import React, {useState, useEffect} from 'react';
import './styles/reset.css';
import './styles/global.css';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(error => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div className="App">
    <ul>
      {courses.map(course => (
        <li>{course.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
