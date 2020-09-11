export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.userId,
        token: action.token,
        timeout: action.timeout,
        employee_code: action.employee_code,
        level_access: action.level_access,
      };
    case "USERNAME":
      return {
        ...state,
        username: action.username,
      };
    case "SIGN_OUT":
      return {
        isLoggedIn: false,
        userId: null,
        token: null,
        timeout: null,
        employee_code: null,
        username: null,
        level_access: null,
      };
    case "RESTORE_USER":
      return {
        isLoggedIn: action.isLoggedIn,
        userId: action.userId,
        token: action.token,
        timeout: action.timeout,
        employee_code: action.employee_code,
        username: action.username,
        level_access: action.level_access,
      };
    default:
      return state;
  }
};
