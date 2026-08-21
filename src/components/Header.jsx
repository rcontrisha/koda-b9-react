import { Link } from "react-router";
import { useContext } from "react";

import userContext from "../contexts/user/userContext";

function Header({ title }) {
  const { state, dispatch } = useContext(userContext);

  const handleLogout = () => {
    return dispatch({ type: "logout" });
  };

  return (
    <header className="flex justify-between p-1 bg-blue-300">
      <h1 className="flex justify-center items-center text-2xl font-bold">
        {title}
      </h1>
      <nav className="flex justify-center items-center py-2">
        <ul className="list-none flex gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/product"}>Product Data</Link>
          </li>
          <li>
            <Link to={"/pokemon"}>Pokemon Data</Link>
          </li>
          <li>
            <Link to={"/survey"}>Form Survey</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
        <div className="mx-4">
          {state.user.username !== null ? (
            <div className="flex gap-2 items-center">
              <p className="font-bold">Hi, {state.user.username}!</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-bold text-white px-3 py-1 rounded-lg flex items-center"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="bg-blue-700 text-white px-3 py-1 rounded-lg flex items-center"
            >
              Log In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
