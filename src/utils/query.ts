import { QueryClientConfig } from "react-query";

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry: 0,
      staleTime: Infinity,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
};
