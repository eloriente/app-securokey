// Vendors
import { Outlet } from "react-router";
// Components
import { CustomToastComponent, HeaderComponent } from "../components/ui";
import { UiProvider } from "../context";

function RootLayout() {
  return (
    <UiProvider>
      <HeaderComponent />
      <Outlet />
      <CustomToastComponent />
    </UiProvider>
  )
}

export default RootLayout;