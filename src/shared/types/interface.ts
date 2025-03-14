export interface AuthState {
  data: null | object;
  status: string;
}
export interface ChatState {
  chats: {
    data: [] | null;
    status: string;
  };
  messages: {
    data: [] | null;
    status: string;
  };
}

