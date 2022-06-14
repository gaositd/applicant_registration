import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../../actions/actionsGetUserInfo";

const Profile = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  // console.log(isAuthenticated);
  // console.log(user);
  // alert(user)
  // return (
  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //       {
  //         alert(user)
  //       }
  //     </div>
  //   )
  // );
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  useEffect(()=> dispatch(getUserInfo()),[dispatch]);
  console.log(userInfo);
  return(
    <React.Fragment>
      {userInfo.length === 0 ? alert(userInfo): <div>{userInfo.user}</div>}
    </React.Fragment>
  );
};

export default Profile;