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
  university: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(3); 


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
      `${user.firstName} ${user.lastName} ${user.maidenName} ${user.username} `.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleUsersPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUsersPerPage(Number(event.target.value));
    setCurrentPage(1); 
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
      <div>
        <div className= {utilStyles.slider}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
         >
          <span> &larr; </span> Previous
        </button>
        <button className={utilStyles.search}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastUser >= filteredUsers.length}
        >
           Next <span> &rarr; </span>
        </button><button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
         >
        </button>
        </div>
        
           <div>
        <label htmlFor="usersPerPageSelect"> Users per Page: </label>
        <select
          id="usersPerPageSelect"
          value={usersPerPage}
          onChange={handleUsersPerPageChange}
        >
          <option value="3">3</option>
          <option value="12">12</option>
          <option value="30">30</option>
        </select>
      </div>
         
      </div>

  <ul className={utilStyles.column}>
    {currentUsers.map((user) => (
      <li key={user.id}>
        <div className={utilStyles.dummy}>
        <img src={user.image} alt={`User ${user.id}`} className={utilStyles.dimg}/> <br/>
        Name:{user.firstName}  {user.maidenName} {user.lastName}<br/> 
        Username: {user.username}<br/>
        Email: {user.email}<br/>
        Gender: {user.gender}<br/>
        Phone: {user.phone}<br/>
        </div>
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
