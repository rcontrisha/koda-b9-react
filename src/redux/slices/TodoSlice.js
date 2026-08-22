  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
  todo: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const addTodoThunk = createAsyncThunk(
  "add_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((res) => {
        setTimeout(() => {
          res(payload);
        }, 2000);
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add To-do");
    }
  },
);

export const toggleTodoThunk = createAsyncThunk(
  "toggle_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to change To-do status");
    }
  },
);

export const removeTodoThunk = createAsyncThunk(
  "remove_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to remove To-do");
    }
  },
);

const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    addTodo: (prev, { payload }) => {
      return {
        ...prev,
        todo: [...prev.todo, payload],
      };
    },
    toggleTodo: (prev, { payload }) => {
      return {
        ...prev,
        todo: prev.todo.map((item) =>
          item.id === payload ? { ...item, isDone: !item.isDone } : item,
        ),
      };
    },
    removeTodo: (prev, { payload }) => {
      return {
        ...prev,
        todo: prev.todo.filter((item) => {
          return item.id !== payload;
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addAsyncThunk(addTodoThunk, {
      pending: (state) => {
        ((state.isPending = true),
          (state.isFulfilled = false),
          (state.isRejected = false),
          (state.error = null));
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.todo.push(payload);
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });

    builder.addAsyncThunk(toggleTodoThunk, {
      pending: (state) => {
        ((state.isPending = true),
          (state.isFulfilled = false),
          (state.isRejected = false),
          (state.error = null));
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        const target = state.todo.find((item) => item.id === payload);
        if (target) {
          target.isDone = !target.isDone;
        }
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });

    builder.addAsyncThunk(removeTodoThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
        state.error = null;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.todo = state.todo.filter((item) => item.id !== payload);
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
