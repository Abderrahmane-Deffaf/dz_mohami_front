import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

test("displays logo", async () => {
  const queryClient = new QueryClient();

  const navBar = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </QueryClientProvider>
  );

  const navBarLogo = await navBar.findByTestId("logoNavbar");
  expect(navBarLogo.src).toContain("logo_text.svg");
  navBar.unmount();
});
