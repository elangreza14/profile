// import { useCallback, useEffect, useContext } from "react";
// import { DecripParse, EncripParse } from "../../utils";
// import { AuthContext } from "../../contexts";

// export const useAuth = (data) => {
export const useAuth = () => {
  return "test";
  // const { dispatch_auth } = useContext(AuthContext);
  // const store = useCallback(() => {
  //   const ecrip = EncripParse(
  //     data,
  //     process.env.REACT_APP_ADMIN_LOGIN_KEY,
  //     false,
  //     {}
  //   );
  //   localStorage.setItem("UserData", ecrip);
  // }, [data]);

  // const get = useCallback(() => {
  //   var cat = localStorage.getItem("UserData");
  //   const getdataparse = DecripParse(
  //     cat,
  //     process.env.REACT_APP_ADMIN_LOGIN_KEY
  //   );
  //   dispatch_auth({
  //     type: "RESTORE_USER",
  //     isLoggedIn: getdataparse.isLoggedIn,
  //     userId: getdataparse.userId,
  //     token: getdataparse.token,
  //     timeout: getdataparse.timeout,
  //     employee_code: getdataparse.employee_code,
  //     username: getdataparse.username,
  //     level_access: getdataparse.level_access,
  //   });
  // }, [dispatch_auth]);

  // const logout = useCallback(() => {
  //   dispatch_auth({ type: "SIGN_OUT" });
  // }, [dispatch_auth]);

  // useEffect(() => {
  //   var cat = localStorage.getItem("UserData");
  //   if (cat) {
  //     get();
  //   }
  // }, [get]);

  // useEffect(() => {
  //   store();
  //   // ////console.log(data)
  // }, [data, store]);

  // useEffect(() => {
  //   const now = Date.now();
  //   if (
  //     data.isLoggedIn &&
  //     data.token !== null &&
  //     data.employee_code !== null &&
  //     data.userId !== null &&
  //     now > data.timeout
  //   ) {
  //     logout();
  //   }
  // }, [data, logout]);

  // return {
  //   login:
  //     data.isLoggedIn &&
  //     data.token !== null &&
  //     data.employee_code !== null &&
  //     data.userId !== null &&
  //     data.timeout !== null,
  //   logout,
  // };
};
