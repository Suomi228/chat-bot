import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { chatReducer } from "./slices/chat";

const reducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
