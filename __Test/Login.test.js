import React from "react";
import LoginForm from "../Login";
import { render, screen, fireEvent } from "@testing-library/react";


test("testing library khong nhap username", () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Vui long nhap username")).toBeInTheDocument();
});
test("khong nhap password", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Vui long nhap mat khau")).toBeInTheDocument();
});
test("username va password sai", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "incorrect" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "incorrect" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(
    screen.getByText("Thong tin sai")
  ).toBeInTheDocument();
});
test("Display welcome message when username and password are correct", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "admin123" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Hello")).toBeInTheDocument();
});