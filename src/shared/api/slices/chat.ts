import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../axios.config.ts";
import { STATUS } from "../../consts/consts.ts";
import { ChatState } from "../../types/interface.ts";

export const showChatList = createAsyncThunk("/chat/list", async () => {
  const response = await axiosConfig.get("/chat/list");
  return response.data;
});

export const showMessagesPerChat = createAsyncThunk(
  "/chat/messages",
  async (id: string) => {
    const response = await axiosConfig.get(`/chat/${id}/messages`);
    return response.data;
  }
);

interface MessageParams {
    chatId: string;
    message: string;
}

export const sendMessage = createAsyncThunk(
  "/message/send  ",
  async (params: MessageParams) => {
    const response = await axiosConfig.post("/message/send", {
      chatId: params.chatId,
      message: params.message,
    });
    return response.data;
  }
);

export const createChat = createAsyncThunk("/chat/create", async () => {
  const response = await axiosConfig.post("/chat", {
    name: "New Chat",
  });
  return response.data;
});

export const deleteChat = createAsyncThunk(
  "chat/delete",
  async (id: string) => {
    const response = await axiosConfig.delete(`/chat/${id}`);
    return response.data;
  }
);

const initialState: ChatState = {
  chats: {
    data: [],
    status: STATUS.PENDING,
  },
  messages: {
    data: [],
    status: STATUS.PENDING,
  },
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
        state.chats.data = null;
        state.chats.status = STATUS.PENDING;
      })
      .addCase(showChatList.fulfilled, (state, action) => {
        state.chats.data = action.payload.data;
        state.chats.status = STATUS.FULFILLED;
      })
      .addCase(showChatList.rejected, (state) => {
        state.chats.data = null;
        state.chats.status = STATUS.REJECTED;
      })
      .addCase(showMessagesPerChat.pending, (state) => {
        state.messages.data = null;
        state.messages.status = STATUS.PENDING;
      })
      .addCase(showMessagesPerChat.fulfilled, (state, action) => {
        state.messages.data = action.payload.data;
        state.messages.status = STATUS.FULFILLED;
      })
      .addCase(showMessagesPerChat.rejected, (state) => {
        state.messages.data = null;
        state.messages.status = STATUS.REJECTED;
      })
      .addCase(sendMessage.pending, (state) => {
        state.messages.data = null;
        state.messages.status = STATUS.PENDING;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.data = action.payload;
        state.messages.status = STATUS.FULFILLED;
      })
      .addCase(sendMessage.rejected, (state) => {
        state.messages.data = null;
        state.messages.status = STATUS.REJECTED;
      })
      .addCase(createChat.pending, (state) => {
        state.chats.data = null;
        state.chats.status = STATUS.PENDING;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chats.data = action.payload.data;
        state.chats.status = STATUS.FULFILLED;
      })
      .addCase(createChat.rejected, (state) => {
        state.chats.data = null;
        state.chats.status = STATUS.REJECTED;
      })
      .addCase(deleteChat.pending, (state) => {
        state.chats.data = null;
        state.chats.status = STATUS.PENDING;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.chats.data = action.payload.data;
        state.chats.status = STATUS.FULFILLED;
      })
      .addCase(deleteChat.rejected, (state) => {
        state.chats.data = null;
        state.chats.status = STATUS.REJECTED;
      });
  },
});

export const chatReducer = chatSlice.reducer;
