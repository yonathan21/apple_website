import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";



Sentry.init({
  dsn: "https://d53297441398da9fbfdb78316b9dcfb6@o4508976186720256.ingest.us.sentry.io/4508976189669376",
  integrations: [
    Sentry.replayIntegration(),
    
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
