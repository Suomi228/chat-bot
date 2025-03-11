import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../axios.config.ts";
import { STATUS } from "../../consts/consts.ts";
import { ChatState } from "../../types/interface.ts";

export const showChatList = createAsyncThunk("/chat/list", async () => {
  const response = await axiosConfig.get("/chat/list");
  return response.data;
});

export const createChat = createAsyncThunk("/chat/create", async () => {
  const response = await axiosConfig.post("/chat", {
    name: "New Chat",
  });
  return response.data;
});

export const deleteChat = createAsyncThunk("chat/delete", async (id: string) => {
  const response = await axiosConfig.delete(`/chat/${id}`);
  return response.data;
});

const initialState: ChatState = {
  data: null,
  status: STATUS.PENDING,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // logout: (state) => {
    //   localStorage.removeItem("token");
    //   state.data = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showChatList.pending, (state) => {
        state.data = null;
        state.status = STATUS.PENDING;
      })
      .addCase(showChatList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(showChatList.rejected, (state) => {
        state.data = null;
        state.status = STATUS.REJECTED;
      })
      .addCase(createChat.pending, (state) => {
        state.data = null;
        state.status = STATUS.PENDING;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(createChat.rejected, (state) => {
        state.data = null;
        state.status = STATUS.REJECTED;
      })
      .addCase(deleteChat.pending, (state) => {
        state.data = null;
        state.status = STATUS.PENDING;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(deleteChat.rejected, (state) => {
        state.data = null;
        state.status = STATUS.REJECTED;
      });
  },
});

export const chatReducer = chatSlice.reducer;
