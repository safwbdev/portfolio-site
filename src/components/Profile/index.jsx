import React from "react";
function Profile({
  data: { github, linkedin, image, desc, email, location, name, role, tel },
}) {
  return (
    <div>
      <h1>Profile</h1>
      <p>{github}</p>
      <p>{linkedin}</p>
      <p>{desc}</p>
      <p>{email}</p>
      <p>{location}</p>
      <p>{name}</p>
      <p>{role}</p>
      <p>{tel}</p>
    </div>
  );
}
export default Profile;
