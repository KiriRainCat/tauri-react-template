import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h3>Hello from About</h3>
    </div>
  );
}
