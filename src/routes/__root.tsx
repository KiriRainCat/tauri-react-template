import { Button } from "@/components/ui/button";
import { createRootRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const isCurrent = (path: string) => useRouterState().location.pathname === path;

  return (
    <div className="flex h-dvh flex-col">
      <nav className="flex gap-2 p-2">
        <Link to="/">
          <Button variant="link" className={isCurrent("/") ? "underline" : ""}>
            Home
          </Button>
        </Link>

        <Link to="/about">
          <Button variant="link" className={isCurrent("/about") ? "underline" : ""}>
            About
          </Button>
        </Link>
      </nav>

      <hr />

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
