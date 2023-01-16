import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import * as ResizeObserverModule from 'resize-observer-polyfill';
import { afterEach, expect, vi } from "vitest";

// eslint-disable-next-line no-undef
global.ResizeObserver = ResizeObserverModule.default;

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

/* eslint-disable no-undef */
window.matchMedia = vi.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
});
