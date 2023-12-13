"use client";

import AppProvider from "@/context/context";
import FilterProvider from "@/context/fiterContext";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 10,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Provider store={store}>
          <FilterProvider>
            <NextUIProvider>{children}</NextUIProvider>;
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition="bottom-left"
            />
          </FilterProvider>
        </Provider>
      </AppProvider>
    </QueryClientProvider>
  );
}
