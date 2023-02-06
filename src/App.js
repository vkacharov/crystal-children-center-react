
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MemberView from "./pages/MemberView";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ResponsiveNavBar } from './ui-components';

function App({ signOut, user }) {
  let isAdmin = false;
  const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"];
  if (userGroups) {
    isAdmin = userGroups.includes('Admin');
  }

  return (
    <div className="main-content">
      <BrowserRouter>
        
        <ResponsiveNavBar onSignOutClick={signOut}/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home isAdmin={isAdmin}/>}/>
            <Route path="/member/:id" element = {<MemberView isAdmin={isAdmin} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default withAuthenticator(App, {hideSignUp: true});
