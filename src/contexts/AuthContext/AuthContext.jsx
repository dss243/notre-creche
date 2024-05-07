import { createContext, useEffect, useReducer } from "react";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
  error: false,
};
const LOGOUT = 'LOGOUT';
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload, error: false };
    case "LOGIN_FAILURE":
      return { user: null, error: action.payload };
    case "REFRESH_TOKEN":
      return {
        ...state,
        user: {
          ...state.user,
          refreshToken: action.payload.refreshToken,
          accessToken: action.payload.accessToken,
        },
      };
    case "UPDATE_DATA":
      return { ...state, user: { ...state.user, data: action.payload } };
      case LOGOUT:
        return { ...state, user: null };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            followings: state.user.data.followings.filter(
              (following) => following !== action.payload
            ),
          },
        },
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            followings: [...state.user.data.followings, action.payload],
          },
        },
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  console.log(state.user); // add this line to check the user state
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{ user: state.user, error: state.error, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};


