import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";

export const Route = createRootRoute({
  component: () => (
    <div className="h-dvh">
      <header className="px-2 py-4">
        <Container className="max-w-6xl" as="nav">
          <div className="flex gap-4 ">
            <Link to="/" className="[&.active]:font-bold [&.active]:text-purple-500">
              Multiple renders
            </Link>
            <Link to="/component-with-state" className="[&.active]:font-bold [&.active]:text-purple-500">
              Component with state
            </Link>
            <Link to="/expensive-component" className="[&.active]:font-bold [&.active]:text-purple-500">
              Expensive component
            </Link>
          </div>
        </Container>
      </header>
      <hr className="mb-12" />
      <Container as="main">
        <Outlet />
      </Container>
    </div>
  ),
})
