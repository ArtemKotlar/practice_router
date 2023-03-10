import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};
