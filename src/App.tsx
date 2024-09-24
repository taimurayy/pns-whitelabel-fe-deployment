import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProcessingPage from "./pages/Processing";
import { GlobalProvider } from "./components/GlobalVar";
import { ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import Login1 from "./pages/login/Login1";
import SchedulingLinks from "./pages/Settings/SchedulingLinks";
import RolesAndPermissions from "./pages/Settings/RolesAndPermissions";
import SignUpForm1 from "./pages/Signup/SignUpForm1";
import SignUpForm2 from "./pages/Signup/SignUpForm2";
import SignUpForm3 from "./pages/Signup/SignUpForm3";
import SignUpForm4 from "./pages/Signup/SignUpForm4";
import SignUpForm5 from "./pages/Signup/SignUpForm5";
import Settings from "./pages/dashboard/Settings";
import PhonesAndVoiceMails from "./pages/Settings/PhonesAndVoiceMails";
import Customization from "./pages/dashboard/Customization";
import Billing from "./pages/dashboard/Billing";
import Dashboard from "./pages/dashboard/Dashboard";
import theme from "./theme";
import StatusAndPipelines from "./pages/Settings/StatusAndPipelines";
import SetNewPassword from "./pages/login/SetNewPassword";
import ResetPassword from "./pages/login/ResetPassword";
import Login2 from "./pages/login/Login2";
import Navbar from "./components/Navbar";
import PaymentMethod from "./pages/Signup/PaymentMethod";
import ActivityOverView from "./pages/dashboard/Reports/ActivityOverView";
import Home from "./pages/dashboard/Home";
import "global";
import Opportunities from "./pages/dashboard/Opportunities";
import NewSettings from "./pages/Settings/NewSettings";
import CustomFeilds from "./pages/Settings/CustomFeilds";
import Leads from "./pages/dashboard/Leads";
import General from "./pages/Settings/General";
import Importlead from "./pages/dashboard/ImportLeads";
import AccountsAndApps from "./pages/Settings/AccountsAndApps";
import Contacts from "./pages/dashboard/Contacts";
import TeamManagement from "./pages/Settings/TeamManagement";
const AppWrapper: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/sign-up-1" element={<SignUpForm1 />} />
        <Route path="/sign-up-2" element={<SignUpForm2 />} />
        <Route path="/sign-up-3" element={<SignUpForm3 />} />
        <Route path="/Payment" element={<PaymentMethod />} />
        <Route path="/sign-up-4" element={<SignUpForm4 />} />
        <Route path="/sign-up-5" element={<SignUpForm5 />} />
        <Route path="Dashboard/Clients" element={<Dashboard />} />
        <Route path="Dashboard/Settings" element={<Settings />} />
        <Route path="Dashboard/Billings" element={<Billing />} />
        <Route path="Dashboard/Customization" element={<Customization />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Opportunities" element={<Opportunities />} />
        <Route path="/Settings" element={<NewSettings />} />
        <Route path="/CustomFields" element={<CustomFeilds />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/StatusAndPipelines" element={<StatusAndPipelines />} />
        <Route path="/General" element={<General />} />
        <Route path="/ImportLeads" element={<Importlead />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/AccountsAndApps" element={<AccountsAndApps />} />
        <Route path="/PhonesAndVoiceMails" element={<PhonesAndVoiceMails />} />
        <Route path="/RolesAndPermissions" element={<RolesAndPermissions />} />
        <Route path="/SchedulingLinks" element={<SchedulingLinks />} />
        <Route path="/TeamManagement" element={<TeamManagement />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route
          path="/Reports/ActivityOverview"
          element={<ActivityOverView />}
        />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{ redirect_uri: window.location.origin }}>
          <Router>
            <AppWrapper />
          </Router>
        </Auth0Provider>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
