import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <p className="loader">Loading...</p>;
  }

  return (
    <div>
      <Link className="link" to="/users">
        Back to Users
      </Link>
      <table className="user-table">
        <div className="personal-info">
          <p className="user-info-title">Contact info</p>
          <tr>
            <th>First Name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Maiden Name</th>
            <td>{user.maidenName}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Birth date</th>
            <td>{user.birthDate}</td>
          </tr>
        </div>
        <div className="personal-info">
          <p className="user-info-title">Qualifications</p>
          <tr>
            <th>University</th>
            <td>{user.university}</td>
          </tr>
          <tr>
            <th>Field of work</th>
            <td>{user.company.department}</td>
          </tr>
          <tr>
            <th>Position</th>
            <td>{user.company.title}</td>
          </tr>
        </div>
      </table>
    </div>
  );
};

export default User;
