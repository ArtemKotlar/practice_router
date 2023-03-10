import { Box } from 'components/Box';
import { getInvoices } from 'fakeApi';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);
  return (
    <div>
      <Box as="aside" display="flex" flexDirection="column">
        {invoices.map(({ id }) => (
          <NavLink to={`${id}`}>{id}</NavLink>
        ))}
      </Box>
      <Outlet />
    </div>
  );
};
