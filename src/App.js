
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MemberView from "./pages/MemberView";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  let isAdmin = false;
  const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"];
  if (userGroups) {
    isAdmin = userGroups.includes('Admin');
  }

  return (
    <div className="main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout onSignOut={signOut}/>}>
            <Route index element={<Home isAdmin={isAdmin}/>}/>
            <Route path="/member/:id" element = {<MemberView isAdmin={isAdmin} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default withAuthenticator(App, {hideSignUp: true});
