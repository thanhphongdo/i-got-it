import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/api";

interface Todo {
  title: string;
}

interface TodoState {
  todo: Todo | null;
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todo: null,
  loading: false,
  error: null,
};

// Async thunk để fetch todo
export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (id: number, { dispatch }) => {
    /** Use API from RTK Query */
    const result = await dispatch(api.endpoints.getTodo.initiate(id)).unwrap();
    console.log("Fetched via RTK Query:", result);
    // return result;

    /** Or fetch manually */
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    if (!response.ok) throw new Error("Failed to fetch todo");
    const data: Todo = await response.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.todo = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.loading = false;
        state.todo = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.todo = null;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
