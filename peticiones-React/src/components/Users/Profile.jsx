import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Profile of {user.name}</h1>
      <div>User from: {user.registered}</div>
    </div>
  );
};

export default Profile;
