import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <section></section>;
}

export default User;
