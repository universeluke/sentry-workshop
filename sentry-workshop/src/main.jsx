import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a89c9c55a5cef1315bfd55e06c05e244@o4508800299237376.ingest.de.sentry.io/4508800304152656",
  integrations: [],
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
