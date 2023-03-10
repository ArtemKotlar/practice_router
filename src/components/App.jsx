import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Sales } from 'Sales/Sales';
import { Invoices } from './Invoice/Invoices';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
