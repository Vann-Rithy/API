import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://my-sever-api.vercel.app/members') // Update the fetch URL
      .then(response => response.json())
      .then(data => {
        setMembers(data.members);
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
