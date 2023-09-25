import React from 'react';

export default function User({ user }){
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.FirstName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/users'); 
    const data = await response.json();
  
    return{
        props: {
            users: data,
        },
    };
  }
  