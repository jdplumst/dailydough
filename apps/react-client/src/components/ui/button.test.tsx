import { describe, it } from "vitest";
import { createRoot } from "react-dom/client";
import { Button } from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const root = createRoot(div);

    root.render(<Button />);

    root.unmount();
  });
});
