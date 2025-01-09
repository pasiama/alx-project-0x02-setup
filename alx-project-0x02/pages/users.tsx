/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/users.tsx
import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const formattedUsers = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
          },
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        {users.length > 0 ? (
          users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </>
  );
};

export default Users;
