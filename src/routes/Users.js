import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  


  if (isLoading) {
    return <p className="loader">Loading...</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName, email, phone }) => (
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <button className="button" onClick={() => navigate(`/users/${id}`)}>
                  Show more
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default Users
