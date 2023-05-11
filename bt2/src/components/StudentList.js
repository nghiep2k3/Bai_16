import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../actions/contacts';
import CourseList from './ContactList';
import CourseForm from './ContactForm';

function StudentList() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          Tên học sinh: {student.name}
          <button onClick={() => handleDelete(student.id)}>Xóa</button>
          <CourseForm studentId={student.id} />
          <CourseList courses={student.courses} studentId={student.id} />
        </div>
      ))}
    </div>
  );
}

export default StudentList;