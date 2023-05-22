import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import the Axios library
import './App.css'; // Import the CSS file

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/members')
      .then(response => {
        setMembers(response.data.members);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Members get Form API:</h1>
      <table className="members-table"> {/* Apply CSS class */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.gender}</td>
              <td>{member.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
