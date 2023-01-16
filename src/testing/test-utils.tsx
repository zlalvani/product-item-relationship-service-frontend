import { render, renderHook, RenderOptions } from "@testing-library/react";
import React, { FC } from "react";

import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryTestClientProvider } from "../lib";
import { KeyCloakProvider } from "../lib/keycloak";
import { ServerEnvProvider } from "../utils/ServerEnv";
import i18n from "./i18n-testconfig";

type ExtendedRenderOptions = Omit<RenderOptions, "queries">;

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ServerEnvProvider>
        <ReactQueryTestClientProvider>
          <KeyCloakProvider>{children}</KeyCloakProvider>
        </ReactQueryTestClientProvider>
      </ServerEnvProvider>
    </I18nextProvider>
  );
};

export function renderWithProviders(ui: React.ReactElement, { ...renderOptions }: ExtendedRenderOptions = {}) {
  // Return an object with the store and all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderCustomHook<Props, Result>(fn: (props: Props) => Result) {
  return renderHook(fn, { wrapper: Wrapper });
}

export const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...renderWithProviders(ui, { wrapper: BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { renderWithProviders as render };
export { renderCustomHook as renderHook };
