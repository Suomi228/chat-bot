import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../axios.config.ts";
import { STATUS } from "../../consts/consts.ts";
import { RootState } from "../store.ts";
import { AuthState } from "../../types/interface.ts";
import { User } from "../../types/type.ts";

export const signIn = createAsyncThunk("/auth/signup", async (params: User) => {
  const response = await axiosConfig.post("/auth/signup", {
    email: params.email,
    password: params.password,
  });
  return response.data;
});


const initialState: AuthState = {
  data: null,
  status: STATUS.PENDING,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.data = null;
        state.status = STATUS.PENDING;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(signIn.rejected, (state) => {
        state.data = null;
        state.status = STATUS.REJECTED;
      });
  },
});

export const selectIsAuth = (state: RootState): boolean =>
  Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
