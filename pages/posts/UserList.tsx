import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
  <ul>
    {users.map((user) => (
      <li key={user.id}>
         {user.name} - {user.email}
      </li>
    ))}
  </ul>
    </div>
  );
};

export default UserList;
