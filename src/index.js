import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import  studioTheme  from './ui-components/studioTheme';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

console.log('BUCKET', awsExports.aws_user_files_s3_bucket);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AmplifyProvider theme = {studioTheme}>
    <App />
  </AmplifyProvider>
);

reportWebVitals();
