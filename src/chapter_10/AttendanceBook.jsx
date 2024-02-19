import React from "react";

const students = [
  { id: 1, name: "Kyle" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Kevin" },
  { id: 4, name: "Joshua" },
  { id: 5, name: "Jeff" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}> {student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
