import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { serverEnvReducer } from "../store/serverEnvironment";
import { AppStore, RootState } from "../store/store";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n-testconfig";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { serverEnvReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>{children}</Provider>
      </I18nextProvider>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
export { renderWithProviders as render };
