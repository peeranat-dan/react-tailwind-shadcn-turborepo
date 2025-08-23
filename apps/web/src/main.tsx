import { Button } from "@workspace/ui/components/ui/button";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button>Button</Button>
  </StrictMode>
);
