import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  email: string;
  gender: string;
  age: number;
  username: string;
  password: string;
  phone: string;
  image: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data.users);
        setUsers(data.users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.maidenName} ${user.username} ${user.email} ${user.gender} ${user.phone}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1 className={utilStyles.hv1}>User List</h1>

      <div className={utilStyles.search}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

  <ul className={utilStyles.column}>
    {filteredUsers.map((user) => (
      <li key={user.id}>
        <img src={user.image} alt={`User ${user.id}`} /> <br/>
        Name:{user.firstName}  {user.maidenName} {user.lastName}<br/> Username: {user.username}<br/>
        Email: {user.email}<br/>
        Gender: {user.gender}<br/>
        Phone: {user.phone}
      </li>
    ))}
  </ul>
  <h2>
            <Link href="/">Back home </Link>
        </h2>
    </div>
  );
};

export default UserList;
