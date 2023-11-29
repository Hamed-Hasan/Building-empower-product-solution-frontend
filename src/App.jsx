import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Table from './components/Table/Table';
import Loading from './shared/Loading/Loading';

// Higher-order component for handling loading condition
const withLoading = (Component) => ({ loading, ...props }) =>
  loading ? <Loading /> : <Component {...props} />;

const LoginWithLoading = withLoading(Login);
const SignupWithLoading = withLoading(Signup);
const TableWithLoading = withLoading(Table);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay, replace this with your actual data fetching logic
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount or when the data is fetched
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWithLoading loading={loading} />} />
        <Route path="/signup" element={<SignupWithLoading loading={loading} />} />
        <Route path="/table" element={<TableWithLoading loading={loading} />} />
      </Routes>
    </Router>
  );
}

export default App;
