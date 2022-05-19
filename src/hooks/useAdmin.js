import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/admin/${email}`;
    if (email) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoader(false);
        });
    }
  }, [user]);
  return [admin, adminLoader];
};

export default useAdmin;
