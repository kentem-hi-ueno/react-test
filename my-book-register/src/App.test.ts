import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect, test  } from "vitest";
import App from "./App"
test("adds 1 + 2 to equal 3", () => {

  render(<App />)
  expect().toBe(3);
});