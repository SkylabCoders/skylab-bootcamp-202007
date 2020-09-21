import React, { useState, useEffect } from "react";

export default function User({id}) {
  const [user, setUser] = useState(null);

  async function fetchUserData(userId) {
    const response = await fetch(`/${userId}`);
    setUser(await response.json());
  }

  useEffect((id) => {
    fetchUserData(id);
  }, [id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <div data-testid="name">{user.name}</div>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}