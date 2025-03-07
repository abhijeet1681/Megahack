// client/src/components/AdminDashboard.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const instructorsRes = await axios.get('/api/admin/instructors');
        const studentsRes = await axios.get('/api/admin/students');
        setInstructors(instructorsRes.data.data);
        setStudents(studentsRes.data.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchActivity();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <section>
        <h3>Instructor Activity</h3>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor._id}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Student Activity</h3>
        <ul>
          {students.map((student) => (
            <li key={student._id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
