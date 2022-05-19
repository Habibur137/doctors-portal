import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users {users?.length}</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>User</th>
            <th>All Admin</th>
            <th>Delete Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              refetch={refetch}
              user={user}
              key={user._id}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
