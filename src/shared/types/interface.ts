export interface AuthState {
  data: null | object;
  status: string;
}
export interface ChatState {
  data: {
    data: [];
    pages: number;
  } | null;
  status: string;
}
