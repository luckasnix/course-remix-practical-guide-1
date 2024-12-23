import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import { MainNavigation } from "~/components/main-navigation";

describe("<MainNavigation />", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Notes")).toBeInTheDocument();
  });
});
