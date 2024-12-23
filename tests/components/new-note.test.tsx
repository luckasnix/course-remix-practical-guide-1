import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { NewNote } from "~/components/new-note";

describe("<NewNote />", () => {
  test("renders correctly", () => {
    render(<NewNote />);

    expect(screen.getByRole("textbox", { name: "title" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "content" })).toBeInTheDocument();
  });
});
