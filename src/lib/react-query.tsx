import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export let queryClient = new QueryClient();

export const ReactQueryClientProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export const ReactQueryTestClientProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    // Removed logger configuration as it's not a recognized property in QueryClientConfig.
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
