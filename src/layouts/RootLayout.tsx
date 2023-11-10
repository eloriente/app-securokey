// Vendors
import { Outlet } from "react-router";
// Components
import { HeaderComponent } from "../components/ui";

function RootLayout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}

export default RootLayout;