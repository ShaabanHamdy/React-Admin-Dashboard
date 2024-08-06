import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import BarChart from "./pages/barChart/BarChart";
import Calendar from "./pages/calendar/Calendar.jsx";
import Contacts from "./pages/contacts/Contacts";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Faq from "./pages/faq/Faq";
import Form from "./pages/form/Form";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";
import LineChart from "./pages/line/LineChar";
import PieChart from "./pages/pie/PieChar.jsx";
import Team from "./pages/team/Team";

// ==================================================================
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/barChart" element={<BarChart />} />
      <Route path="/PieChar" element={<PieChart />} />
      <Route path="/LineChart" element={<LineChart />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/geography" element={<Geography />} />
    </Route>
  )
);
// ==================================================================

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
