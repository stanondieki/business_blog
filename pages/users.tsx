"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../common/IUser";
import User from "../components/user/User";

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(100);
  const [pageSize, setPageSize] = useState(10);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const key = e.target[0].value.trim();
    const filteredUsers = users.filter((user) => {
      if (
        user.firstName.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        user.lastName.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        user.username.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      ) {
        return user;
      }
    });
    setUsers(filteredUsers);
  };

  const handlePrevious = (e: any) => {
    console.log("previous");
  };

  const handleNext = (e: any) => {
    console.log("next");
  };

  const handleSelectChange = (e: any) => {
    const value = e.target.value;
    console.log(value);
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      const data = res.data;
      const users = data.users;
      const size = users.length;
      setPageEnd(size);
      setUsers(users);
    });
  }, []);

  return (
    <div className="mx-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Users
      </h1>

      <div className="flex flex-col items-end mt-2">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900">{pageStart}</span> to{" "}
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            onChange={handleSelectChange}
            defaultValue={pageSize}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="max">Max</option>
          </select>{" "}
          of <span className="font-semibold text-gray-900">{pageEnd}</span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handlePrevious}
          >
            Prev
          </button>
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      <form onSubmit={handleSearch} className="mt-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Name, Email..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
