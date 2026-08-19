import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import userContext from "../contexts/user/userContext";
import Header from "../components/Header";

function Profile() {
  const { state, dispatch } = useContext(userContext);
  const [avatar, setAvatar] = useState({ file: null, objectURL: null });
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (() => {
      if (state.user.avatar !== null) {
        setAvatar({
          file: state.user.avatar,
          objectUrl: URL.createObjectURL(state.user.avatar),
        });
      }
    })();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (avatar.objectUrl) {
      URL.revokeObjectURL(avatar.objectUrl);
    }

    setAvatar({
      file: file,
      objectUrl: URL.createObjectURL(file),
    });
  };

  return (
    <>
      <Header title={"Profile"} />
      <main className="w-screen">
        <h1 className="flex justify-center font-bold text-5xl mb-10">
          Edit User Info
        </h1>
        <form
          className="max-w-lg mx-auto flex flex-col"
          onSubmit={handleSubmit((form) => {
            dispatch({
              type: "edit",
              payload: {
                user: {
                  username: form.usn,
                  avatar: form.avatar?.[0] || avatar.file,
                },
              },
            });
          })}
        >
          <div>
            <label htmlFor="avatar" className="flex justify-center">
              <div className="h-30 w-30 overflow-hidden mb-10">
                {avatar.objectUrl ? (
                  <img
                    src={avatar.objectUrl}
                    alt="user avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full rounded-full bg-gray-400">
                    <span className="text-white font-bold text-4xl">
                      {state.user.username[0]}
                    </span>
                  </div>
                )}
              </div>
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
              onChange={(e) => {
                if (avatar.objectUrl) {
                  URL.revokeObjectURL(avatar.objectUrl);
                }
                setAvatar({
                  file: e.target.files[0],
                  objectUrl: URL.createObjectURL(e.target.files[0]),
                });
              }}
              {...register("avatar", {
                onChange: handleFileChange,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input
              className="border border-gray-600 px-2 py-1"
              type="text"
              name="usn"
              id="usn"
              defaultValue={state.user.username || ""}
              {...register("usn")}
            />
          </div>
          <button className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white mt-4 rounded-lg w-fit self-end">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Profile;
