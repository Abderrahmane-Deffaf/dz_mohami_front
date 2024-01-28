import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Footer from "@/components/Footer";
import { MemoryRouter } from "react-router-dom";

test("displays logo", async () => {
  const footer = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const footerLogo = await footer.findByTestId("logoFooter");
  expect(footerLogo.src).toContain("logo_white_big.svg");
  footer.unmount();
});
