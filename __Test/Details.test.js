import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "../Details";
const userInfo = {
  userName: "minhthangtran",
  email: "minhthang3916@gmail.com",
  phone: "0338810761",
};
test("test", () => {
  render(<UserDetails info={userInfo} />);

  expect(screen.getByText("User Details")).toBeInTheDocument();
  expect(
    screen.getByText(`Username: ${userInfo.userName}`)
  ).toBeInTheDocument();
  expect(screen.getByText(`Email: ${userInfo.email}`)).toBeInTheDocument();
  expect(screen.getByText(`Phone: ${userInfo.phone}`)).toBeInTheDocument();
});
