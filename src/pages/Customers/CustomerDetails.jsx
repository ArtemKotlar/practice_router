import { getCustomerById } from 'fakeApi';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;

  return (
    <main>
      <Link to="/customers">Back to customers</Link>
      <p>id: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};
