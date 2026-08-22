import { useSelector, useDispatch } from "react-redux";
import {
  addTodoThunk,
  toggleTodoThunk,
  removeTodoThunk,
} from "../redux/slices/TodoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const { todo, isPending, error } = useSelector((state) => state.todoState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const desc = e.target.desc.value.trim();

    if (!title) return;

    dispatch(
      addTodoThunk({
        id: Date.now(),
        title,
        desc,
        isDone: false,
      }),
    );

    e.target.reset();
  };

  return (
    <main className="grid grid-cols-[1.5fr_1fr] gap-10 px-12 py-6">
      <div>
        <h1 className="font-bold text-4xl pb-3">To-do Lists</h1>

        {error && (
          <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              disabled={isPending}
              className="border border-gray-500 px-3 py-2 rounded-lg disabled:bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              rows={4}
              disabled={isPending}
              className="border border-gray-500 px-2 py-2 rounded-lg disabled:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-1.5 w-fit bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg mt-4 self-center transition-colors"
          >
            {isPending ? "Adding..." : "Submit"}
          </button>
        </form>
      </div>

      <div>
        <div className="flex items-center justify-between pb-3">
          <h2 className="font-bold text-2xl">Your To-do</h2>
          {isPending && (
            <span className="text-sm font-semibold text-blue-600 animate-pulse">
              Syncing...
            </span>
          )}
        </div>

        <div className="py-2 flex flex-col gap-3">
          {todo.length === 0 ? (
            <p className="text-gray-500 italic">No tasks available.</p>
          ) : (
            todo.map((item) => (
              <div key={item.id} className="flex gap-2">
                <div className="px-4 py-2 rounded-lg border border-gray-500 grow">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      disabled={isPending}
                      onChange={() => {
                        dispatch(toggleTodoThunk(item.id));
                      }}
                      className="w-4 h-4 mr-2 cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <p
                          className={`font-bold text-xl grow ${
                            item.isDone ? "line-through text-gray-400" : ""
                          }`}
                        >
                          {item.title}
                        </p>
                        {item.isDone ? (
                          <div className="px-3 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full h-fit">
                            Already Done
                          </div>
                        ) : (
                          <div className="px-3 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full h-fit">
                            Not Done Yet
                          </div>
                        )}
                      </div>
                      <p
                        className={`text-sm mt-1 ${
                          item.isDone
                            ? "line-through text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    disabled={isPending}
                    className="px-3 py-1.5 h-fit bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold text-xs rounded-lg transition-colors"
                    onClick={() => {
                      dispatch(removeTodoThunk(item.id));
                    }}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default TodoList;
