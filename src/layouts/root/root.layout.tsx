// Vendors
import { Outlet } from "react-router";
// Components
import { CustomToastComponent, HeaderComponent, FooterComponent } from "../../components/ui";
import { UiProvider } from "../../context";

function RootLayout() {
  return (
    <UiProvider>
      <HeaderComponent />
      <Outlet />
      <CustomToastComponent />
      <FooterComponent/>
    </UiProvider>
  )
}

export default RootLayout;