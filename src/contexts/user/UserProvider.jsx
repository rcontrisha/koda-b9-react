import { useReducer } from "react";

import UserContext from "./userContext";

const initState = {
  user: {
    username: null,
    avatar: null,
  },
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "login":
        return {
          ...prevState,
          user: { username: action.payload.username, avatar: null },
        };

      case "logout":
        return {
          ...prevState,
          user: initState.user,
        };
      case "edit":
        return {
          ...prevState,
          user: action.payload.user
      };

      default:
        break;
    }
  }, initState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}