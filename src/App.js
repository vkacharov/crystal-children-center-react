
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MemberView from "./pages/MemberView";
import { withAuthenticator, Heading, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <div className="main-content">
      <div className="page-header">
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/member/:id" element = {<MemberView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default withAuthenticator(App);
