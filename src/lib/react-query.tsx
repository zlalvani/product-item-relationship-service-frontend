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
    logger: {
      log: console.log,
      warn: console.warn,
      error:
        process.env.NODE_ENV === "test"
          ? () => {
              return undefined;
            }
          : console.error,
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { useQuery } from "@tanstack/react-query";
