import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import userContext from "../contexts/user/userContext";

function Login() {
  const { state, dispatch } = useContext(userContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-10 text-2xl font-bold">LOGIN (MOCKUP)</h1>
      <form
        onSubmit={handleSubmit((form) => {
          dispatch({
            type: "login",
            payload: { username: form.usn },
          });
          navigate("/")
        })}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="usn">Username</label>
          <input
            className="border border-gray-400 px-2 py-2"
            type="text"
            name="usn"
            id="usn"
            defaultValue={state.user.username ? state.user.username : null}
            {...register("usn")}
          />
          <button
            type="submit"
            className="px-3 py-1.5 border border-gray-800 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
